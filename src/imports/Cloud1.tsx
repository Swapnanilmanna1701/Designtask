import imgRectangle from "figma:asset/9d31e4d44c0c2535cb3a6fb9f5b3ab2c3f82677b.png";
import imgRectangle1 from "figma:asset/57da015a5f0ad32afa80ddd50f48c800c55ab5d9.png";
import imgRectangle2 from "figma:asset/47a9d2dd5a26a9cb4b5ed6119d8f4f6686696ce8.png";

function C() {
  return (
    <div className="absolute contents inset-[9.06%_7.65%_21.45%_10.1%] mix-blend-hard-light" data-name="c1">
      <div className="absolute inset-[12.09%_9.09%_21.45%_11.54%] mix-blend-hard-light" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[21.15%_9.09%_24.47%_11.54%] mix-blend-hard-light" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
      <div className="absolute inset-[9.06%_7.65%_21.45%_10.1%] mix-blend-hard-light" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}

export default function Cloud() {
  return (
    <div className="relative size-full" data-name="CLOUD1">
      <C />
    </div>
  );
}