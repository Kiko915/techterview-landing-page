<template>
  <div class="chat-widget">
    <!-- Chat Toggle Button -->
    <div 
      v-if="!isOpen" 
      @click="toggleChat"
      class="chat-toggle-btn"
      :class="{ 'pulse': !hasInteracted }"
    >
      <svg class="icon-chat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.698-.408L5 21l1.408-5.302A8.955 8.955 0 015 13c0-4.418 3.582-8 8-8s8 3.582 8 7z"></path>
      </svg>
      <div class="notification-dot" v-if="!hasInteracted && messages.length === 0"></div>
    </div>

    <!-- Chat Window -->
    <div v-if="isOpen" class="chat-window">
      <!-- Chat Header -->
      <div class="chat-header">
        <div class="header-info">
          <div class="chat-avatar">
            <img 
              src="/logo/techterview_symbol_colored.webp" 
              alt="TechTerview" 
              class="avatar-image"
            />
          </div>
          <div>
            <h3 class="assistant-title">TechTerview Assistant</h3>
            <p class="assistant-subtitle">Ask me anything about our platform</p>
          </div>
        </div>
        <div class="header-actions">
          <button @click="clearConversation" class="clear-btn" title="Clear conversation">
            <svg class="icon-clear" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
          <button @click="toggleChat" class="close-btn">
            <svg class="icon-close" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="chat-messages" ref="messagesContainer">
        <!-- Welcome Message -->
        <div v-if="messages.length === 0" class="message ai-message">
          <div class="message-avatar">
            <img 
              src="/logo/techterview_symbol_colored.webp" 
              alt="TechTerview" 
              class="avatar-image-small"
            />
          </div>
          <div class="message-content ai-content">
            <p>👋 Hi! I'm the TechTerview Assistant. I can help you learn about our interview prep platform, features, pricing, and answer any questions you have!</p>
            <div class="quick-questions">
              <button 
                v-for="question in quickQuestions" 
                :key="question"
                @click="askQuickQuestion(question)"
                class="quick-question-btn"
              >
                {{ question }}
              </button>
            </div>
          </div>
        </div>

        <!-- Chat Messages -->
        <div 
          v-for="(message, index) in messages" 
          :key="`message-${index}-${message.id}`"
          class="message"
          :class="message.type === 'user' ? 'user-message' : 'ai-message'"
        >
          <div class="message-avatar" v-if="message.type === 'ai'">
            <img 
              src="/logo/techterview_symbol_colored.webp" 
              alt="TechTerview" 
              class="avatar-image-small"
            />
          </div>
          <div class="message-content" :class="message.type === 'user' ? 'user-content' : 'ai-content'">
            <p v-html="formatMessage(message.content)"></p>
            <div class="message-time">{{ formatTime(message.timestamp) }}</div>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="message ai-message">
          <div class="message-avatar">
            <img 
              src="/logo/techterview_symbol_colored.webp" 
              alt="TechTerview" 
              class="avatar-image-small"
            />
          </div>
          <div class="message-content ai-content">
            <div class="typing-indicator">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <div class="chat-input">
        <form @submit.prevent="sendMessage" class="input-form">
          <input
            v-model="currentMessage"
            type="text"
            placeholder="Ask me anything about TechTerview..."
            class="chat-input-field"
            :disabled="isTyping"
            ref="messageInput"
          />
          <button 
            type="submit" 
            :disabled="!currentMessage.trim() || isTyping"
            class="chat-send-btn"
          >
            <svg class="icon-send" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'

const isOpen = ref(false)
const messages = ref([])
const currentMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)
const messageInput = ref(null)
const hasInteracted = ref(false)

// localStorage keys
const STORAGE_KEYS = {
  MESSAGES: 'techterview_chat_messages',
  HAS_INTERACTED: 'techterview_chat_interacted',
  LAST_SESSION: 'techterview_chat_last_session'
}

const quickQuestions = [
  "What is TechTerview?",
  "How much does it cost?",
  "What features do you offer?",
  "How do I get started?"
]

// Generate unique ID for messages
const generateMessageId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Save messages to localStorage
const saveToStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages.value))
      localStorage.setItem(STORAGE_KEYS.HAS_INTERACTED, JSON.stringify(hasInteracted.value))
      localStorage.setItem(STORAGE_KEYS.LAST_SESSION, new Date().toISOString())
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }
}

// Load messages from localStorage
const loadFromStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEYS.MESSAGES)
      const savedInteracted = localStorage.getItem(STORAGE_KEYS.HAS_INTERACTED)
      const lastSession = localStorage.getItem(STORAGE_KEYS.LAST_SESSION)

      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages)
        // Check if messages are from recent session (within 7 days)
        if (lastSession) {
          const sessionDate = new Date(lastSession)
          const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          
          if (sessionDate > sevenDaysAgo) {
            messages.value = parsedMessages
          } else {
            // Clear old messages
            clearStoredData()
          }
        }
      }

      if (savedInteracted) {
        hasInteracted.value = JSON.parse(savedInteracted)
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error)
      // Clear corrupted data
      clearStoredData()
    }
  }
}

// Clear stored conversation data
const clearStoredData = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEYS.MESSAGES)
      localStorage.removeItem(STORAGE_KEYS.HAS_INTERACTED)
      localStorage.removeItem(STORAGE_KEYS.LAST_SESSION)
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }
}

// Clear conversation
const clearConversation = () => {
  if (confirm('Are you sure you want to clear the conversation history?')) {
    messages.value = []
    clearStoredData()
    hasInteracted.value = false
  }
}

// Watch messages for changes and save to storage
watch(messages, () => {
  saveToStorage()
}, { deep: true })

// Watch hasInteracted for changes and save to storage
watch(hasInteracted, () => {
  saveToStorage()
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
  hasInteracted.value = true
  
  if (isOpen.value) {
    nextTick(() => {
      if (messageInput.value) {
        messageInput.value.focus()
      }
      scrollToBottom()
    })
  }
}

const askQuickQuestion = async (question) => {
  currentMessage.value = question
  await sendMessage()
}

const sendMessage = async () => {
  if (!currentMessage.value.trim() || isTyping.value) return

  const userMessage = currentMessage.value.trim()
  const userMessageObj = {
    id: generateMessageId(),
    type: 'user',
    content: userMessage,
    timestamp: new Date()
  }
  
  messages.value.push(userMessageObj)
  currentMessage.value = ''
  isTyping.value = true

  await nextTick()
  scrollToBottom()

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userMessage })
    })

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error)
    }

    const aiMessageObj = {
      id: generateMessageId(),
      type: 'ai',
      content: data.response,
      timestamp: new Date()
    }

    messages.value.push(aiMessageObj)
  } catch (error) {
    const errorMessageObj = {
      id: generateMessageId(),
      type: 'ai',
      content: 'Sorry, I encountered an error. Please try again later or contact our support team.',
      timestamp: new Date()
    }
    
    messages.value.push(errorMessageObj)
    console.error('Chat error:', error)
  }

  isTyping.value = false
  await nextTick()
  scrollToBottom()
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const formatMessage = (content) => {
  // Basic markdown-like formatting
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
}

const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInMinutes = Math.floor((now - date) / 60000)
  
  if (diffInMinutes < 1) return 'now'
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
  return date.toLocaleDateString()
}

onMounted(() => {
  // Load conversation from localStorage
  loadFromStorage()
  
  // Auto-pulse the chat button for 10 seconds if user hasn't interacted
  if (!hasInteracted.value) {
    setTimeout(() => {
      if (!hasInteracted.value) {
        hasInteracted.value = true
      }
    }, 10000)
  }

  // Scroll to bottom if there are existing messages
  if (messages.value.length > 0) {
    nextTick(() => {
      scrollToBottom()
    })
  }
})
</script>

<style scoped>
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.clear-btn {
  color: rgba(255, 255, 255, 0.7);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px;
  border-radius: 4px;
}

.clear-btn:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.icon-clear {
  width: 16px;
  height: 16px;
}

.message-time {
  font-size: 10px;
  color: #9ca3af;
  margin-top: 4px;
  text-align: right;
}

.user-content .message-time {
  color: rgba(255, 255, 255, 0.7);
}

/* Enhanced chat widget styles */
.chat-widget {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
}

.chat-toggle-btn {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  position: relative;
}

.chat-toggle-btn:hover {
  background: linear-gradient(135deg, #1d4ed8, #1e40af);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.chat-toggle-btn.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.icon-chat {
  width: 24px;
  height: 24px;
}

.notification-dot {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  background-color: #ef4444;
  border-radius: 50%;
  border: 2px solid white;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -1px, 0);
  }
}

.chat-window {
  width: 350px;
  height: 450px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(229, 231, 235, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chat-header {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-avatar {
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.assistant-title {
  font-weight: 600;
  color: white;
  margin: 0;
  font-size: 14px;
}

.assistant-subtitle {
  color: #dbeafe;
  font-size: 12px;
  margin: 0;
}

.close-btn {
  color: rgba(255, 255, 255, 0.7);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px;
  border-radius: 4px;
}

.close-btn:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.icon-close {
  width: 20px;
  height: 20px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #f9fafb;
  scroll-behavior: smooth;
}

.message {
  display: flex;
  gap: 8px;
}

.user-message {
  justify-content: flex-end;
}

.ai-message {
  justify-content: flex-start;
}

.message-avatar {
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 4px;
  padding: 2px;
  border: 1px solid #e5e7eb;
}

.avatar-image-small {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.message-content {
  max-width: 240px;
  padding: 12px;
  border-radius: 16px;
  word-wrap: break-word;
}

.user-content {
  background: #2563eb;
  color: white;
  border-bottom-right-radius: 4px;
}

.ai-content {
  background: white;
  color: #374151;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(229, 231, 235, 0.5);
  border-bottom-left-radius: 4px;
}

.quick-questions {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quick-question-btn {
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid rgba(37, 99, 235, 0.5);
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-question-btn:hover {
  background: #dbeafe;
}

.typing-indicator {
  display: flex;
  gap: 4px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #9ca3af;
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.chat-input {
  padding: 16px;
  border-top: 1px solid rgba(229, 231, 235, 0.5);
  background: white;
}

.input-form {
  display: flex;
  gap: 8px;
}

.chat-input-field {
  flex: 1;
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.chat-input-field:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.chat-input-field::placeholder {
  color: #6b7280;
}

.chat-send-btn {
  width: 40px;
  height: 40px;
  background: #2563eb;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.chat-send-btn:hover {
  background: #1d4ed8;
}

.chat-send-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.icon-send {
  width: 20px;
  height: 20px;
}

/* Mobile Responsiveness */
@media (max-width: 640px) {
  .chat-widget {
    bottom: 16px;
    left: 16px;
  }
  
  .chat-window {
    width: calc(100vw - 32px);
    height: 70vh;
    max-width: 380px;
  }
  
  .message-content {
    max-width: calc(100% - 32px);
  }
}
</style>