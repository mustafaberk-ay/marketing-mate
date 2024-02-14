// Extend the Window interface to include the FB property
declare global {
    interface Window {
      FB: any; // Consider using a more specific type if available or defining one based on the Facebook SDK documentation
      fbAsyncInit: () => void;
    }
  }
  
  const FACEBOOK_APP_ID: string = "365670902722738";
  
  export default function initFacebookSDK(): Promise<void> {
    return new Promise((resolve) => {
      // Dynamically load the Facebook SDK script
      (function (d, s, id) {
        let js: HTMLScriptElement;
        const fjs: HTMLScriptElement = d.getElementsByTagName(s)[0] as HTMLScriptElement;
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode!.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
  
      // Initialize the Facebook SDK after it loads
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: FACEBOOK_APP_ID,
          xfbml: true,
          version: "v18.0",
        });
        resolve();
      };
    });
  }
  