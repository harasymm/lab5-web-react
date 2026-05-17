import { useEffect, useState } from "react";

function Footer() {
  const [deviceInfo, setDeviceInfo] = useState({
    userAgent: "",
    platform: "",
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const cookiesEnabled = navigator.cookieEnabled;

    localStorage.setItem("userAgent", userAgent);
    localStorage.setItem("platform", platform);
    localStorage.setItem("language", language);
    localStorage.setItem("cookiesEnabled", cookiesEnabled);

    const savedUserAgent = localStorage.getItem("userAgent");
    const savedPlatform = localStorage.getItem("platform");
    const savedLanguage = localStorage.getItem("language");
    const savedCookiesEnabled = localStorage.getItem("cookiesEnabled");

    setDeviceInfo({
      userAgent: savedUserAgent,
      platform: savedPlatform,
      language: savedLanguage,
      cookiesEnabled: savedCookiesEnabled,
    });
  }, []);

  return (
    <footer className="bg-[#333] text-white p-5 rounded-b-2xl">

    <div className="flex items-center justify-between">
      
      <img
        src="src/images/iktalogo.jpg"
        alt="IKTA Logo"
        className="w-[90px] ml-20 rounded-full"
      />

      <div className="text-center flex-1">
        <h2>Lab3-web-react. LPNU WebDevelopment</h2>

        <p>&copy; 2026 Markiian Harasym</p>

        <p>
          Contact:{" "}
          <a
            className="underline"
            href="mailto:harasym@example.com"
          >
            harasym@example.com
          </a>
        </p>
      </div>

      <img
        src="src/images/arton141.png"
        alt="LPNU Logo"
        className="w-[90px] mr-20 rounded-full bg-white"
      />
    </div>
    
    <div className="mt-6 text-center text-sm break-all">
      
      <p>
        <strong>User Agent:</strong> {deviceInfo.userAgent}
      </p>

      <p>
        <strong>Platform:</strong> {deviceInfo.platform}
      </p>
      <p>
        <strong>Language:</strong> {deviceInfo.language}
      </p>
      <p>
        <strong>Cookies Enabled:</strong> {deviceInfo.cookiesEnabled}
      </p>

    </div>
</footer>
  );
}

export default Footer;
