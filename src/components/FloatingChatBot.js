"use client";

import React, { useState, useRef, useEffect } from "react";

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const botReply = (userMsg) => {
    const lower = userMsg.toLowerCase();
    if (lower.includes("hello")) return "Hello! 😊 What can I do for you?";
    return "Thanks for your message! I'll get back to you soon.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage = { id: Date.now(), sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    setTimeout(() => {
      const replyText = botReply(newUserMessage.text);
      const newBotMessage = { id: Date.now() + 1, sender: "bot", text: replyText };
      setMessages((prev) => [...prev, newBotMessage]);
    }, 800);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    window.launchChatbot = () => setOpen(true);
    return () => delete window.launchChatbot;
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#10b981",
          border: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          color: "#fff",
          fontSize: 28,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        {open ? "×" : "💬"}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 24,
            width: 360,
            maxHeight: 480,
            backgroundColor: "#f0fdf9",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <header style={{
            backgroundColor: "#34d399",
            padding: "12px 16px",
            fontWeight: "700",
            fontSize: "1.1rem",
          }}>
            Chat with Kabila
          </header>

          <div ref={chatRef} style={{
            flexGrow: 1,
            padding: 16,
            overflowY: "auto",
            backgroundColor: "#e6f4ea",
          }}>
            {messages.map(({ id, sender, text }) => (
              <div key={id} style={{
                display: "flex",
                justifyContent: sender === "user" ? "flex-end" : "flex-start",
                marginBottom: 12,
              }}>
                <div style={{
                  backgroundColor: sender === "user" ? "#0d9488" : "#a7f3d0",
                  color: sender === "user" ? "#fff" : "#065f46",
                  padding: "10px 16px",
                  borderRadius: "20px",
                  maxWidth: "75%",
                  wordBreak: "break-word",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}>
                  {text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{
            display: "flex",
            gap: 8,
            padding: 12,
            borderTop: "1px solid #c7f0db",
            backgroundColor: "#daf7e3",
          }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flexGrow: 1,
                padding: "10px 14px",
                borderRadius: "20px",
                border: "1px solid #34d399",
                fontSize: "1rem",
              }}
              autoFocus
            />
            <button type="submit" style={{
              backgroundColor: "#10b981",
              color: "#fff",
              border: "none",
              padding: "0 18px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "600",
            }}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
