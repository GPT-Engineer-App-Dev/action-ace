import { toPng  } from 'html-to-image';

const main = async () => {
  const postMessage = (msg) => {
    window.parent.postMessage(msg, "*");
  };

  const onMessage = (event) => {
    // TODO: Check origin
    const data = event.data;

    if (data.type === "GET_USER_SNAPSHOT") {
         toPng(document.body)
           .then((datUrl) => {
             postMessage({ type: "snapshot", snapshot: datUrl });
           });
         return;
       }
  };

  window.addEventListener("message", onMessage);
};

main().catch(console.error);
