import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>This is a second line</h2>
      <iframe
        src="https://api.mapbox.com/styles/v1/rwierdatow/cl335zxdp000015mxlbpg9omx.html?title=false&access_token=pk.eyJ1IjoicndpZXJkYXRvdyIsImEiOiJja2kwbWgzcjQxNDZhMnNrYjBvb2xoYnFqIn0.5garp2DAn8cP6AFUcgVZQw&zoomwheel=false#12.00/53.68/-114.36"
        title="Mapbox Outdoors"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}
