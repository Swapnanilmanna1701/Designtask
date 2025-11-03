import svgPaths from "./svg-injjxmwldv";

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="logo">
      <div className="[grid-area:1_/_1] h-[22.907px] ml-0 mt-0 relative w-[16.64px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 23">
          <path d={svgPaths.p37093280} fill="var(--fill-0, #D6D2CD)" id="Union" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Clash_Display:Bold',sans-serif] leading-[61.31%] ml-[24.64px] mt-0 not-italic relative text-[#d6d2cd] text-[15.277px] w-[99.756px]">ScaffoldGen CLI</p>
    </div>
  );
}

function SearchNormal() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <g id="search-normal">
        <path d={svgPaths.p1cd7af0} id="Vector" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M16.5 16.5L15 15" id="Vector_2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearSearchNormal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/search-normal">
      <SearchNormal />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0b0b0a] h-[48px] relative rounded-[4px] shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border border-[#2b2b2b] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0.754] left-[21px] not-italic text-[#969696] text-[18.072px] text-nowrap top-[calc(50%-7px)] whitespace-pre">Search...</p>
      <div className="absolute left-[246px] size-[18px] top-1/2 translate-y-[-50%]" data-name="search-normal">
        <VuesaxLinearSearchNormal />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0.754] not-italic relative shrink-0 text-[#d6d2cd] text-[20px] text-nowrap whitespace-pre">Downloads</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0.754] not-italic relative shrink-0 text-[#d6d2cd] text-[20px] text-nowrap whitespace-pre">Releases</p>
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0.754] not-italic relative shrink-0 text-[#d6d2cd] text-[20px] text-nowrap whitespace-pre">Docs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0.754] not-italic relative shrink-0 text-[#d6d2cd] text-[20px] text-nowrap whitespace-pre">Snippet Manager</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[140px] py-[20px] relative size-full">
          <Logo />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}