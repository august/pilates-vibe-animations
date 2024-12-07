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
  content: "Hi! I'm your Pilates assistant. I can help you learn about Pilates, our studio, pricing, and how to get started. What would you like to know?",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Generate response immediately instead of using setTimeout
    const response = generateResponse(input.toLowerCase());
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setIsTyping(false);
  };

  const generateResponse = (input: string): string => {
    if (input.includes("price") || input.includes("cost") || input.includes("package")) {
      return "We offer various pricing options to suit your needs! Our Introductory Private session is $69, and we have packages ranging from single sessions to 20-packs. For group classes, your first class is just $25! Would you like to see our full pricing menu or get started with a class?";
    }
    
    if (input.includes("sign up") || input.includes("book") || input.includes("schedule")) {
      return "Great choice! You can book your first class at [booking URL]. I recommend starting with our Introductory Private session to get personalized attention and guidance. Would you like me to tell you more about what to expect in your first session?";
    }
    
    if (input.includes("pilates")) {
      return "Pilates is a form of exercise that focuses on core strength, flexibility, and overall body awareness. It's great for all fitness levels and can help with posture, injury prevention, and overall wellness. Would you like to try a class and experience the benefits yourself?";
    }
    
    if (input.includes("studio") || input.includes("location")) {
      return "Our studio is located at 123 Wellness Street in the City Center. We have state-of-the-art Reformer equipment and experienced instructors ready to guide you through your Pilates journey. Would you like to schedule a visit?";
    }
    
    if (input.includes("instructor") || input.includes("teacher")) {
      return "Our instructors are highly qualified and passionate about Pilates. They're certified in various methods and committed to helping you achieve your fitness goals. Would you like to meet them in an Introductory Private session?";
    }

    return "I'm here to help you learn about Pilates and our studio! You can ask me about our classes, pricing, location, or anything else you'd like to know. What interests you most about starting Pilates?";
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

          <div className="flex flex-1 flex-col justify-between p-4 bg-charcoal/95">
            <div className="flex-1 space-y-4 overflow-y-auto mb-4">
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

            <div className="flex gap-2">
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
                className="bg-moss hover:bg-moss/90"
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