const clientId =
  "1030736647713-od5hmftgh92g5rd549j3v36ecsagqpnk.apps.googleusercontent.com";
const apiKey = "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";
const discoveryDocs = ["https://people.googleapis.com/people/rest?version=v1"];
const scopes = "profile";

export function initGoogleSdk() {
  return new Promise((resolve) => {
    // load google sdk script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleAsyncInit";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");

    // wait for google sdk to initialize before starting the react app
    window.googleAsyncInit = function () {
      window.gapi.load("auth2", function () {
        window.gapi.auth2.init({
          client_id: clientId,
          scope: "email",
        });
      });
      resolve();
    };
  });
}
