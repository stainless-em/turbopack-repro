import { Mux } from "@mux/mux-node";

export default () => {
  new Mux({ baseURL: "https://httpbin.org/anything", tokenId: '', tokenSecret: '' }).video.uploads.create();
  return (
    <main>
      <h1>Welcome to Next.js</h1>
    </main>
  );
};
