import imgRectangle from "figma:asset/61ff3ee20096a7e5635e5eb7e8b1889c5b1cea03.png";
import imgRectangle1 from "figma:asset/f356e10e30b09251775b0c4cd07e63af40030ff4.png";
import imgRectangle2 from "figma:asset/f3d1acc852e30e6dbdfea6f96580161f2782593f.png";

export default function C() {
  return (
    <div className="mix-blend-hard-light relative size-full" data-name="c2">
      <div className="absolute inset-[5%_2.22%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[15%_2.22%_5%_2.22%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
      <div className="absolute inset-0" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}