import { useEffect, useState } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    await fetch("https://formspree.io/f/xojbadwl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Message sent!");
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-[400px] text-black shadow-xl relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 bg-[#1d3d72] text-white px-4 py-2 rounded cursor-pointer"
        >
          Close/Закрити
        </button>

        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="border p-2 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            className="border p-2 rounded"
          />

          <textarea
            name="message"
            placeholder="Your message"
            className="border p-2 rounded h-[120px]"
          />

          <button
            type="submit"
            className="bg-[#1d3d72] text-white p-2 rounded cursor-pointer"
          >
            Send/Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;