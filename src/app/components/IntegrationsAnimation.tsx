"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-slate-900 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.excel />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.sheets />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.contract />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.dashing />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.shipping />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.search />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.quickbooks />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
    shipping: () => (
      <svg viewBox="0 -2 20.001 20.001" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="truck" transform="translate(-2 -4)"> <path id="secondary" fill="#b5b5b5" d="M20.24,10.81,19,10.5l-.79-2.77a1,1,0,0,0-1-.73H13V6a1,1,0,0,0-1-1H4A1,1,0,0,0,3,6V16a1,1,0,0,0,1,1H5a2,2,0,0,1,4,0h6a2,2,0,0,1,4,0h1a1,1,0,0,0,1-1V11.78A1,1,0,0,0,20.24,10.81Z"></path> <path id="primary" d="M5,17H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5h8a1,1,0,0,1,1,1V17H9" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path id="primary-2" data-name="primary" d="M15,17H13V7h4.25a1,1,0,0,1,1,.73L19,10.5l1.24.31a1,1,0,0,1,.76,1V16a1,1,0,0,1-1,1H19" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path id="primary-3" data-name="primary" d="M7,15a2,2,0,1,0,2,2A2,2,0,0,0,7,15Zm10,0a2,2,0,1,0,2,2A2,2,0,0,0,17,15Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g></svg>
      ),
    
  contract: () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        height="40px" 
        width="40px" 
        version="1.1" 
        id="Layer_1" 
        viewBox="0 0 511.882 511.882"
        >
        <polygon 
            style={{fill:"#E6E9ED"}} 
            points="388.314,70.233 324.328,6.248 318.081,0 309.27,0 31.981,0 10.657,0 10.657,21.323 10.657,490.559 10.657,511.882 31.981,511.882 373.254,511.882 394.563,511.882 394.563,490.559 394.563,85.308 394.563,76.482"
          />
          <g>
            <path 
              style={{fill:"#434A54"}} 
              d="M85.313,298.602h234.611c5.873,0,10.652-4.779,10.652-10.669s-4.779-10.669-10.652-10.669H85.313 c-5.905,0-10.669,4.779-10.669,10.669S79.408,298.602,85.313,298.602z"
            />
            <path 
              style={{fill:"#434A54"}} 
              d="M319.923,341.249H85.313c-5.905,0-10.669,4.781-10.669,10.67c0,5.89,4.765,10.669,10.669,10.669 h234.611c5.873,0,10.652-4.779,10.652-10.669C330.577,346.03,325.797,341.249,319.923,341.249z"
            />
            <path 
              style={{fill:"#434A54"}} 
              d="M202.613,405.235H85.313c-5.905,0-10.669,4.779-10.669,10.669s4.765,10.67,10.669,10.67h117.301 c5.889,0,10.669-4.78,10.669-10.67S208.503,405.235,202.613,405.235z"
            />
          </g>
          <polygon 
            style={{fill:"#E6E9ED"}} 
            points="472.732,341.03 444.395,341.03 415.901,440.57 458.547,469.002 501.224,440.57"
          />
          <path 
            style={{fill:"#656D78"}} 
            d="M458.547,63.766c-23.557,0-42.646,19.089-42.646,42.646v287.934h85.324V106.413 C501.224,82.855,482.105,63.766,458.547,63.766z"
          />
          <path 
            style={{fill:"#8CC153"}} 
            d="M127.96,148.372v-20.62h21.339c5.889,0,10.654-4.78,10.654-10.67c0-5.889-4.765-10.669-10.654-10.669 H127.96V95.758c0-5.889-4.765-10.669-10.654-10.669s-10.669,4.78-10.669,10.669v10.654h-5.327c-18.417,0-24.307,7.545-26.025,13.855 c-3.218,11.951,7.045,25.12,31.353,40.179v20.62H85.313c-5.889,0-10.669,4.78-10.669,10.67c0,5.889,4.78,10.653,10.669,10.653 h21.323c0,5.905,4.78,10.67,10.669,10.67s10.654-4.765,10.654-10.67h5.342c18.402,0,24.307-7.529,26.01-13.856 C162.546,176.599,152.266,163.43,127.96,148.372z M98.918,127.814c0.703-0.047,1.5-0.062,2.39-0.062h5.327v6.857 C103.09,131.891,100.606,129.594,98.918,127.814z M133.301,181.067h-5.342v-6.857c3.546,2.718,6.03,5.015,7.717,6.795 C134.973,181.051,134.176,181.067,133.301,181.067z"
          />
          <polygon 
            style={{fill:"#CCD1D9"}} 
            points="394.563,76.482 318.081,76.482 318.081,0"
          />
        </svg>
      ),
  dashing: () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="41" height="41" viewBox="0 0 41 41" fill="none">
<rect width="41" height="41" fill="url(#pattern0_8_38)"/>
<defs>
<pattern id="pattern0_8_38" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_8_38" transform="translate(-0.00898204) scale(0.00598802)"/>
</pattern>
<image id="image0_8_38" width="170" height="167" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>
  ),
  sheets: () => (
    <svg
      width="47px"
      height="65px"
      viewBox="0 0 47 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-1"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-3"
        />
        <linearGradient
          x1="50.0053945%"
          y1="8.58610612%"
          x2="50.0053945%"
          y2="100.013939%"
          id="linearGradient-5"
        >
          <stop stopColor="#1A237E" stopOpacity="0.2" offset="0%" />
          <stop stopColor="#1A237E" stopOpacity="0.02" offset="100%" />
        </linearGradient>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-6"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-8"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-10"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-12"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-14"
        />
        <radialGradient
          cx="3.16804688%"
          cy="2.71744318%"
          fx="3.16804688%"
          fy="2.71744318%"
          r="161.248516%"
          gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
          id="radialGradient-16"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%" />
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
        </radialGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(-451.000000, -463.000000)">
          <g id="Hero" transform="translate(0.000000, 63.000000)">
            <g id="Personal" transform="translate(277.000000, 309.000000)">
              <g id="Docs-icon" transform="translate(174.000000, 91.000000)">
                <g id="Group">
                  <g id="Clipped">
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                      id="Path"
                      fill="#4285F4"
                      fillRule="nonzero"
                      mask="url(#mask-2)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-4" fill="white">
                      <use xlinkHref="#path-3" />
                    </mask>
                    <g id="SVGID_1_" />
                    <polygon
                      id="Path"
                      fill="url(#linearGradient-5)"
                      fillRule="nonzero"
                      mask="url(#mask-4)"
                      points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                    ></polygon>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-7" fill="white">
                      <use xlinkHref="#path-6" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                      id="Shape"
                      fill="#F1F1F1"
                      fillRule="nonzero"
                      mask="url(#mask-7)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-9" fill="white">
                      <use xlinkHref="#path-8" />
                    </mask>
                    <g id="SVGID_1_" />
                    <g id="Group" mask="url(#mask-9)">
                      <g transform="translate(26.437500, -2.954545)">
                        <path
                          d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                          id="Path"
                          fill="#A1C2FA"
                          fillRule="nonzero"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-11" fill="white">
                      <use xlinkHref="#path-10" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                      mask="url(#mask-11)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-13" fill="white">
                      <use xlinkHref="#path-12" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-13)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-15" fill="white">
                      <use xlinkHref="#path-14" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                      id="Path"
                      fillOpacity="0.1"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-15)"
                    />
                  </g>
                </g>
                <path
                  d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                  id="Path"
                  fill="url(#radialGradient-16)"
                  fillRule="nonzero"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  excel: () => (
    <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main background shapes */}
      <path d="M37.8663 3.3916H19.5526C18.3411 3.3916 17.3589 4.40211 17.3589 5.64863V49.3682C17.3589 50.6147 18.3411 51.6252 19.5526 51.6252H54.7176C55.9292 51.6252 56.9114 50.6147 56.9114 49.3682V5.64863C56.9114 4.40211 55.9292 3.3916 54.7176 3.3916H37.8663Z" fill="#FFFFFF" fillOpacity="0.9"/>
      
      {/* Excel green sections */}
      <path d="M37.8663 3.3916H19.5526C19.2652 3.39159 18.9807 3.45009 18.7155 3.56372C18.4502 3.67735 18.2095 3.84387 18.0071 4.05367C17.8046 4.26348 17.6446 4.51243 17.5361 4.78617C17.4277 5.05991 17.3729 5.35303 17.3751 5.64863V15.4458H37.8663V3.3916Z" fill="#21A366"/>
      <path d="M54.7501 3.3916H37.8663V15.4458H56.8951V5.64863C56.8994 5.05732 56.6764 4.48823 56.2746 4.06542C55.8728 3.64262 55.3248 3.40041 54.7501 3.3916Z" fill="#33C481"/>
      <path d="M56.9113 27.5H37.8663V39.5542H56.9113V27.5Z" fill="#107C41"/>
      <path d="M37.8663 39.5542V27.5H17.3751V49.3514C17.3729 49.6484 17.4282 49.9429 17.5376 50.2178C17.6471 50.4926 17.8086 50.7423 18.0128 50.9523C18.2169 51.1624 18.4596 51.3285 18.7267 51.4412C18.9939 51.5538 19.2801 51.6107 19.5688 51.6084H54.7501C55.0388 51.6107 55.325 51.5538 55.5921 51.4412C55.8593 51.3285 56.102 51.1624 56.3061 50.9523C56.5102 50.7423 56.6717 50.4926 56.7812 50.2178C56.8907 49.9429 56.946 49.6484 56.9438 49.3514V39.5542H37.8663Z" fill="#185C37"/>
      <path d="M37.8663 15.4458H17.3588V27.5H37.8663V15.4458Z" fill="#107C41"/>
      <path d="M56.9113 15.4458H37.8663V27.5H56.9113V15.4458Z" fill="#21A366"/>
      
      {/* Excel logo box */}
      <path d="M29.8063 13.9412H7.82009C6.60852 13.9412 5.62634 14.9517 5.62634 16.1982V38.8187C5.62634 40.0652 6.60852 41.0757 7.82009 41.0757H29.8063C31.0179 41.0757 32.0001 40.0652 32.0001 38.8187V16.1982C32.0001 14.9517 31.0179 13.9412 29.8063 13.9412Z" fill="#107C41"/>
      
      {/* Excel X letter */}
      <path d="M12.5 34.8395L17.0662 27.4999L12.825 20.1604H16.2375L18.545 24.8416C18.7562 25.2763 18.9025 25.6107 18.9838 25.8281C19.13 25.477 19.2925 25.1259 19.455 24.7915L21.925 20.1604H25.0613L20.7388 27.4999L25.1913 34.9063H21.9412L19.26 29.7737C19.1382 29.5547 19.0349 29.3254 18.9512 29.0882C18.8736 29.3226 18.77 29.547 18.6425 29.757L15.75 34.8395H12.5Z" fill="white"/>
      
      {/* Highlight effect */}
      <path opacity="0.5" d="M29.8063 13.9412H7.82009C6.60852 13.9412 5.62634 14.9517 5.62634 16.1982V38.8187C5.62634 40.0652 6.60852 41.0757 7.82009 41.0757H29.8063C31.0179 41.0757 32.0001 40.0652 32.0001 38.8187V16.1982C32.0001 14.9517 31.0179 13.9412 29.8063 13.9412Z" fill="url(#excel_gradient)" style={{mixBlendMode: "soft-light"}}/>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="excel_gradient" x1="10.2088" y1="12.169" x2="28.162" y2="42.3889" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5"/>
          <stop offset="1" stopOpacity="0.7"/>
        </linearGradient>
      </defs>
    </svg>
  ),
    quickbooks: () => (
        <svg width="55" height="51" viewBox="0 0 55 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_34_1847)">
            <path d="M27.5 51C42.6877 51 55 39.5832 55 25.5C55 11.4168 42.6877 0 27.5 0C12.3123 0 0 11.4168 0 25.5C0 39.5832 12.3123 51 27.5 51Z" fill="#2CA01C"/>
            <path d="M7.63898 25.5C7.63898 28.1301 8.76572 30.6524 10.7713 32.5122C12.7769 34.3719 15.4971 35.4167 18.3335 35.4167H19.861V31.7332H18.3335C17.4462 31.7397 16.5662 31.5834 15.7444 31.2731C14.9226 30.9628 14.1752 30.5047 13.5453 29.9252C12.9153 29.3457 12.4153 28.6563 12.0741 27.8968C11.7329 27.1373 11.5573 26.3226 11.5573 25.4998C11.5573 24.677 11.7329 23.8624 12.0741 23.1028C12.4153 22.3433 12.9153 21.6539 13.5453 21.0744C14.1752 20.495 14.9226 20.0369 15.7444 19.7266C16.5662 19.4163 17.4462 19.2599 18.3335 19.2665H22V38.5333C22.0003 39.5101 22.4189 40.4468 23.1637 41.1375C23.9085 41.8282 24.9186 42.2164 25.972 42.2169V15.5833H18.3335C16.929 15.5833 15.5383 15.8397 14.2407 16.3381C12.9432 16.8364 11.7642 17.5668 10.7711 18.4877C9.77793 19.4086 8.99014 20.5018 8.45267 21.705C7.91519 22.9081 7.63898 24.1977 7.63898 25.5ZM36.6665 15.5833H35.139V19.2669H36.6665C38.4362 19.2854 40.1265 19.9503 41.3708 21.1172C42.6151 22.2841 43.313 23.859 43.313 25.5C43.313 27.141 42.6151 28.7159 41.3708 29.8828C40.1265 31.0497 38.4362 31.7146 36.6665 31.7332H33V12.4671C33.0001 11.9834 32.8974 11.5044 32.6978 11.0575C32.4982 10.6106 32.2056 10.2045 31.8368 9.86248C31.4679 9.52043 31.03 9.24909 30.5481 9.06397C30.0662 8.87885 29.5496 8.78357 29.028 8.78357V35.4171H36.6665C39.5029 35.4171 42.2231 34.3723 44.2287 32.5126C46.2343 30.6528 47.361 28.1305 47.361 25.5004C47.361 22.8703 46.2343 20.348 44.2287 18.4882C42.2231 16.6285 39.5029 15.5833 36.6665 15.5833Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_34_1847">
                    <rect width="55" height="51" fill="white"/>
                </clipPath>
            </defs>
        </svg>

  ),
  search: () => (
    <svg 
      viewBox="0 0 448 448" 
      fill="#000000" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>file-preview</title>
      <g transform="translate(0,-604.36224)">
        <path 
          style={{fillOpacity: 1, stroke: "none", strokeWidth: 36, strokeLinecap: "round", strokeMiterlimit: 4, strokeDasharray: "none", strokeOpacity: 1}}
          d="M 96 0 L 96 32 L 96 160 L 128 160 L 128 32 L 320 32 L 320 128 L 416 128 L 416 416 L 160 416 L 144 416 L 128 416 L 96 416 L 96 448 L 128 448 L 448 448 L 448 416 L 448 111.01953 L 336.98047 0 L 128 0 L 96 0 z" 
          transform="translate(0,604.36224)"
        />
        <path 
          style={{fillOpacity: 1, stroke: "none", strokeWidth: 36, strokeLinecap: "round", strokeMiterlimit: 4, strokeDasharray: "none", strokeOpacity: 1}}
          d="M 160 192 A 96 95.999992 0 0 0 64 288 A 96 95.999992 0 0 0 78.117188 337.88281 L 0 416 L 32 448 L 110.09375 369.90625 A 96 95.999992 0 0 0 160 384 A 96 95.999992 0 0 0 256 288 A 96 95.999992 0 0 0 160 192 z M 160 224 A 64 63.999996 0 0 1 224 288 A 64 63.999996 0 0 1 160 352 A 64 63.999996 0 0 1 96 288 A 64 63.999996 0 0 1 160 224 z" 
          transform="translate(0,604.36224)"
        />
      </g>
    </svg>
  ),
};
