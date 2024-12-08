import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { MessageCircle, X, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE = {
  role: "assistant" as const,
  content: "Hi! I'm your Pru, your personal Pilates assistant. I can help you learn about Pilates, our studio, pricing, and how to get started. What would you like to know?",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    const response = generateResponse(input.toLowerCase(), messages);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setIsTyping(false);
  };

  const generateResponse = (input: string, conversationHistory: Message[]): string => {
    const lastBotMessage = conversationHistory
      .slice()
      .reverse()
      .find(msg => msg.role === "assistant")?.content;

    // If the last bot message was asking about preference between private and group
    if (lastBotMessage?.includes("Would you prefer to try a private session or join a group class?") ||
        lastBotMessage?.includes("private session or join a group class")) {
      if (input.includes("private")) {
        return "Great choice! For private sessions, I recommend starting with our Introductory Session at $69. This one-on-one session allows our instructor to assess your needs and create a personalized plan. You can book your session at https://clients.mindbodyonline.com/classic/mainclass?studioid=41059 - would you like me to explain the booking process?";
      }
      if (input.includes("group")) {
        return "Excellent! Our group classes are a great way to experience Pilates. Your first class is just $25, and we offer various class times throughout the week. You can view the schedule and book your class at https://clients.mindbodyonline.com/classic/mainclass?studioid=41059 - would you like me to explain how to navigate the booking system?";
      }
    }

    // If the last message was about scheduling
    if (lastBotMessage?.includes("schedule") || lastBotMessage?.includes("book")) {
      return "You can view our schedule and book your class at https://clients.mindbodyonline.com/classic/mainclass?studioid=41059. Once there, you can select your preferred class time and complete your registration. Would you like help with anything else?";
    }

    // Check for greetings
    if (input.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
      return "Hello! How can I help you today? I can tell you about our Pilates classes, pricing, or help you get started!";
    }

    // Check for pricing related queries
    if (input.includes("price") || input.includes("cost") || input.includes("package") || input.includes("membership")) {
      if (input.includes("private") || input.includes("individual")) {
        return "For private sessions, we offer:\n- Introductory Private Session: $69\n- Single Session: $85\n- 5-Pack: $400 ($80/session)\n- 10-Pack: $750 ($75/session)\nYou can book your session at https://clients.mindbodyonline.com/classic/mainclass?studioid=41059. Would you like me to explain the booking process?";
      }
      if (input.includes("group") || input.includes("class")) {
        return "Our group class pricing is:\n- First Class Special: $25\n- Single Class: $35\n- 5-Class Pack: $150\n- 10-Class Pack: $280\n- Unlimited Monthly: $299\nYou can book your class at https://clients.mindbodyonline.com/classic/mainclass?studioid=41059. Would you like me to help you get started?";
      }
      return "We have options for both private sessions and group classes. Private sessions start at $69 for your first session, and group classes start at $25 for your first class. Would you like to know more about private sessions or group classes?";
    }

    // Check for booking and scheduling
    if (input.includes("book") || input.includes("schedule") || input.includes("sign up") || input.includes("register")) {
      if (input.includes("private")) {
        return "For private sessions, you can view availability and book online at https://clients.mindbodyonline.com/classic/mainclass?studioid=41059. Would you like me to explain how to navigate the booking system?";
      }
      if (input.includes("class")) {
        return "You can view our class schedule and book online at https://clients.mindbodyonline.com/classic/mainclass?studioid=41059. Your first class is just $25. Would you like me to explain how to navigate the booking system?";
      }
      return "We'd love to get you started! Would you prefer to try a private session or join a group class? I can help guide you through the booking process for either option.";
    }

    // Default response with conversation continuation
    return "I'm here to help you learn about our Pilates studio and services! You can ask me about our classes, pricing, instructors, or getting started. What interests you most?";
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-moss p-0 shadow-lg hover:bg-moss/90"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="fixed bottom-4 right-4 h-[500px] max-w-[400px] flex flex-col p-0 gap-0 bg-charcoal border border-taupe/20">
          <DialogHeader className="border-b border-taupe/20 p-4 bg-charcoal">
            <DialogTitle className="text-cream">Chat with us</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-cream hover:text-white hover:bg-moss/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <div className="flex flex-1 flex-col justify-between p-4 bg-charcoal/95 overflow-hidden">
            <div 
              ref={messagesContainerRef}
              className="flex-1 space-y-4 overflow-y-auto pr-2 scroll-smooth"
              style={{ 
                maxHeight: "calc(100% - 60px)",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(142, 127, 127, 0.3) transparent"
              }}
            >
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.role === "assistant"
                        ? "bg-taupe/20 text-cream"
                        : "bg-moss text-white"
                    } max-w-[80%]`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-lg bg-taupe/20 px-4 py-2 text-cream">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 mt-4">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="min-h-[50px] resize-none bg-taupe/10 text-cream placeholder:text-cream/50 border-taupe/20 focus-visible:ring-moss"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <Button
                onClick={handleSend}
                className="bg-taupe/50 hover:bg-taupe/40"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;
