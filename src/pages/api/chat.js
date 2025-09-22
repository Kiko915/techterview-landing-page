import { readFileSync } from 'fs';
import { join } from 'path';

export const prerender = false;

export async function POST({ request }) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Read the TechTerview content
    const contentPath = join(process.cwd(), 'src', 'utils', 'techterview-content.json');
    const contentData = JSON.parse(readFileSync(contentPath, 'utf-8'));

    // Check if Gemini API key exists
    const geminiApiKey = import.meta.env.GEMINI_API_KEY;
    
    if (!geminiApiKey) {
      console.error('GEMINI_API_KEY environment variable not found');
      return getFallbackResponse(message, contentData);
    }

    // Create comprehensive system prompt with ALL TechTerview data
    const systemPrompt = `You are TechTerview's AI assistant. You help users learn about our tech interview preparation platform.

ABOUT TECHTERVIEW:
${contentData.about.description}
Mission: ${contentData.about.mission}
Tagline: ${contentData.about.tagline}

TEAM INFORMATION:
${contentData.team.description || 'A passionate group of engineers, designers, and educators dedicated to transforming tech careers'}
Founding Story: ${contentData.team.founding_story}

Team Members:
${contentData.team.members ? contentData.team.members.map(member => `- ${member.name} (${member.role}): ${member.description}`).join('\n') : 'Francis (Co-Founder & CEO), Kyle (Co-Founder & CTO), Yuan (Head of Product), James (Lead Designer), Kith (Senior Engineer)'}

KEY FEATURES:
${contentData.features.map(f => `- ${f.title}: ${f.description}`).join('\n')}

PRICING INFO:
- Free tier: ${contentData.pricing.free ? contentData.pricing.free.features.join(', ') : 'Basic coding challenges, limited mock interviews'}
- Premium (${contentData.pricing.premium ? contentData.pricing.premium.price : '$29/month'}): ${contentData.pricing.premium ? contentData.pricing.premium.features.join(', ') : 'Unlimited access to all features'}

FREQUENTLY ASKED QUESTIONS:
${contentData.faq.map(q => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n')}

CONTACT INFORMATION:
Support Email: ${contentData.contact.support_email}
Sales Email: ${contentData.contact.sales_email}
Social Media: Twitter ${contentData.contact.social_media.twitter}, LinkedIn ${contentData.contact.social_media.linkedin}

PLATFORM INFORMATION:
Version: ${contentData.metadata.version}
Last Updated: ${contentData.metadata.last_updated}
Content Language: ${contentData.metadata.content_language}

FORMATTING GUIDELINES:
- Use bullet points (•) for lists
- Use emojis to enhance readability (but sparingly)
- Use line breaks for better structure
- Use **bold** for important headings or key terms
- Format contact information clearly with labels
- When listing features, use clear bullet points
- When providing steps, use numbered format (1., 2., 3.)
- For contact info, format as:
  📧 **Support:** email
  💼 **Sales:** email  
  🐦 **Twitter:** handle
  💼 **LinkedIn:** profile

Instructions:
- Answer questions ONLY about TechTerview using the information provided above
- Keep responses concise and helpful (maximum 250 words)
- If asked about something not related to TechTerview, politely redirect to our support team
- Be friendly and encouraging about tech interview preparation
- Always format your responses for maximum readability using the formatting guidelines above
- When asked about versions, updates, or platform information, refer to the metadata section above

User Question: ${message}

Please provide a well-formatted, helpful response about TechTerview:`;

    try {
      // Use direct API call to Gemini
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: systemPrompt
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 400,
            },
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              }
            ]
          }),
        }
      );

      if (!response.ok) {
        console.error(`Gemini API error: ${response.status}`);
        const errorText = await response.text();
        console.error('Error details:', errorText);
        return getFallbackResponse(message, contentData);
      }

      const result = await response.json();
      console.log('Gemini API Response:', result);
      
      // Extract the AI response
      let aiResponse = '';
      if (result.candidates && result.candidates.length > 0) {
        const candidate = result.candidates[0];
        if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
          aiResponse = candidate.content.parts[0].text || '';
        }
      }

      // If no valid response, use fallback
      if (!aiResponse || aiResponse.length < 10) {
        console.warn('Empty or invalid AI response, using fallback');
        return getFallbackResponse(message, contentData);
      }

      return new Response(JSON.stringify({ response: aiResponse.trim() }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (geminiError) {
      console.error('Gemini API error:', geminiError);
      return getFallbackResponse(message, contentData);
    }

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Sorry, I encountered an error. Please try again later.',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Enhanced fallback response function with better formatting
function getFallbackResponse(message, contentData) {
  const messageLower = message.toLowerCase();
  let response = '';

  if (messageLower.includes('contact') || messageLower.includes('support') || messageLower.includes('help') || messageLower.includes('email')) {
    response = `📞 **Get in Touch with TechTerview**

📧 **Support:** ${contentData.contact.support_email}
💼 **Sales:** ${contentData.contact.sales_email}

🌐 **Social Media:**
🐦 **Twitter:** ${contentData.contact.social_media.twitter}
💼 **LinkedIn:** ${contentData.contact.social_media.linkedin}

We're here to help you ace your next tech interview! 🚀`;
  } else if (messageLower.includes('version') || messageLower.includes('update') || messageLower.includes('latest')) {
    response = `🚀 **Platform Information**

• **Version:** ${contentData.metadata.version}
• **Last Updated:** ${contentData.metadata.last_updated}
• **Language:** ${contentData.metadata.content_language}

We're constantly improving our platform with new features, enhanced AI feedback, and expanded coding challenges. Stay tuned for more exciting updates!`;
  } else if (messageLower.includes('what is') || messageLower.includes('about') || messageLower.includes('techterview')) {
    response = `🎯 **About TechTerview**

${contentData.about.description}

**Our Mission:** ${contentData.about.mission}`;
  } else if (messageLower.includes('price') || messageLower.includes('cost') || messageLower.includes('free') || messageLower.includes('premium')) {
    response = `💰 **TechTerview Pricing**

**🆓 Free Tier:**
• 5 coding challenges per month
• 1 AI mock interview per month  
• Basic progress tracking
• Community access

**⭐ Premium ($29/month):**
• Unlimited coding challenges
• Unlimited AI mock interviews
• Live expert interviews
• Advanced AI feedback
• Personalized learning paths
• Career insights & analytics
• Priority support

Start with our free tier and upgrade when you're ready! 🚀`;
  } else if (messageLower.includes('team') || messageLower.includes('founder') || messageLower.includes('creator') || messageLower.includes('who made') || messageLower.includes('who created')) {
    response = `👥 **Meet Our Team**

${contentData.team.founding_story}

**Our Team:**
• **Francis** - Co-Founder & CEO
• **Kyle** - Co-Founder & CTO  
• **Yuan** - Head of Product
• **James** - Lead Designer
• **Kith** - Senior Engineer

We're a passionate group of engineers, designers, and educators dedicated to transforming tech careers! 🚀`;
  } else if (messageLower.includes('feature') || messageLower.includes('what can') || messageLower.includes('offer')) {
    response = `✨ **TechTerview Features**

🎯 **Mock Interviews**
• Practice with industry experts and AI interviewers

💻 **Coding Challenges**  
• Real problems from top tech companies

🤖 **AI Feedback**
• Instant analysis of your code and performance

📚 **Personalized Pathways**
• Customized learning based on your goals

📊 **Career Insights**
• Industry trends and salary data

All designed to help you ace your next tech interview! 🏆`;
  } else if (messageLower.includes('start') || messageLower.includes('begin') || messageLower.includes('get started') || messageLower.includes('how to')) {
    response = `🚀 **Getting Started with TechTerview**

**Follow these simple steps:**

1. **Sign Up** - Create your free account
2. **Assessment** - Complete a brief skill evaluation  
3. **Choose Path** - Select your personalized learning pathway
4. **Start Practicing** - Begin with coding challenges
5. **Mock Interview** - Schedule your first interview session

You can begin immediately with our free tier! 🎯`;
  } else {
    response = `👋 **Hi! I'm the TechTerview Assistant**

I can help you learn about our tech interview preparation platform:

• **Features & Services** - What we offer
• **Pricing & Plans** - Free and premium options  
• **Getting Started** - How to begin your journey
• **Team & Company** - Who we are
• **Contact & Support** - How to reach us
• **Platform Updates** - Latest versions and features

What would you like to know? 🚀`;
  }

  return new Response(JSON.stringify({ response }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}