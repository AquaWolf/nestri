import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { buttonVariants, cn } from "@nestri/ui/design";
//randomly get 20 steam ids like this 2358720

// Function to generate random Steam IDs
function generateRandomSteamIds(count: number): number[] {
    const steamIds: number[] = [];
    for (let i = 0; i < count; i++) {
        // Generate a random 7-digit number
        steamIds.push(Math.floor(1000000 + Math.random() * 9000000));
    }
    return steamIds;
}

// Generate 20 random Steam IDs
const randomSteamIds = generateRandomSteamIds(20);
console.log(randomSteamIds);

export default component$(() => {
    return (
        <div class="flex flex-col w-screen select-none items-center justify-center lg:justify-start lg:py-[10vh] gap-4 h-screen">
            <h1 class="font-bold md:text-[200px] text-[120px] text-primary-200 dark:text-primary-800 transition-all duration-200 [-webkit-text-stroke-color:theme(colors.primary.500)] [-webkit-text-stroke-width:4px] leading-[1em]">404</h1>
            <p class=" md:text-3xl text-lg font-medium max-w-md text-center z-[2] mx-auto">Whoops! The page you are looking for does not exist.&nbsp;<br /><Link class="font-title underline underline-offset-1 font-semibold text-primary-500" href="/">Go home?</Link> </p>
            <div class="w-1/2 h-1/2 absolute z-[1] hidden lg:flex mx-auto justify-center items-center top-[43%] left-0 translate-x-1/2">
                <svg
                    width="700"
                    height="465"
                    class="text-gray-500 py-5"
                    viewBox="0 0 185.20833 123.03125"
                    version="1.1"
                    id="svg1"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"><defs
                        id="defs1"><linearGradient
                            id="paint0_linear_693_16793"
                            x1="640"
                            y1="0"
                            x2="640"
                            y2="960"
                            gradientUnits="userSpaceOnUse"><stop
                                stop-color="white"
                                stop-opacity="0"
                                id="stop40" /><stop
                                offset="0.177083"
                                stop-color="white"
                                id="stop41" /><stop
                                offset="0.739583"
                                stop-color="white"
                                id="stop42" /><stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0"
                                id="stop43" /></linearGradient><clipPath
                                    id="clip0_693_16793"><rect
                                width="1280"
                                height="960"
                                fill="#ffffff"
                                id="rect43"
                                x="0"
                                y="0" /></clipPath><filter
                                    id="filter0_d_693_16793-0"
                                    x="374"
                                    y="528"
                                    width="229"
                                    height="230"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="s-rGB"><feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                                id="feFlood34-6" /><feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                                id="feColorMatrix34-3" /><feOffset
                                id="feOffset34-2" /><feGaussianBlur
                                stdDeviation="30"
                                id="feGaussianBlur34-3" /><feComposite
                                in2="hardAlpha"
                                operator="out"
                                id="feComposite34-4" /><feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.498039 0 0 0 0 0.811765 0 0 0 0 1 0 0 0 0.5 0"
                                id="feColorMatrix35-7" /><feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_693_16793"
                                id="feBlend35-2" /><feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_693_16793"
                                result="shape"
                                id="feBlend36-5" /></filter><filter
                                    id="filter1_d_693_16793-1"
                                    x="534.93402"
                                    y="-271.39801"
                                    width="209.134"
                                    height="654.79999"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="s-rGB"><feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                                id="feFlood36-1" /><feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                                id="feColorMatrix36-3" /><feOffset
                                id="feOffset36-8" /><feGaussianBlur
                                stdDeviation="30"
                                id="feGaussianBlur36-6" /><feComposite
                                in2="hardAlpha"
                                operator="out"
                                id="feComposite36-7" /><feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                                id="feColorMatrix37-8" /><feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_693_16793"
                                id="feBlend37-1" /><feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_693_16793"
                                result="shape"
                                id="feBlend38-3" /></filter><filter
                                    id="filter2_d_693_16793-1"
                                    x="535.31598"
                                    y="304.94"
                                    width="208.367"
                                    height="227.076"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="s-rGB"><feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                                id="feFlood38-0" /><feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                                id="feColorMatrix38-4" /><feOffset
                                id="feOffset38-7" /><feGaussianBlur
                                stdDeviation="30"
                                id="feGaussianBlur38-6" /><feComposite
                                in2="hardAlpha"
                                operator="out"
                                id="feComposite38-0" /><feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.498039 0 0 0 0 0.811765 0 0 0 0 1 0 0 0 0.5 0"
                                id="feColorMatrix39-5" /><feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_693_16793"
                                id="feBlend39-5" /><feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_693_16793"
                                result="shape"
                                id="feBlend40-9" /></filter><clipPath
                                    id="clip0_693_16793-6"><rect
                                width="1280"
                                height="960"
                                fill="#ffffff"
                                id="rect43-9"
                                x="0"
                                y="0" /></clipPath></defs><g
                                    id="layer1"><g
                                        style="fill:none"
                                        id="g5"
                                        transform="matrix(0.22977648,0,0,0.22977648,-63.558251,-97.516373)"><g
                                            clip-path="url(#clip0_693_16793)"
                                            id="g34"
                                            transform="translate(0,1.1269769)"><mask
                                                id="mask0_693_16793"
                                                maskUnits="userSpaceOnUse"
                                                x="0"
                                                y="0"
                                                width="1280"
                                                height="960"><rect
                                        width="1280"
                                        height="960"
                                        fill="url(#paint0_linear_693_16793)"
                                        id="rect1-5"
                                        x="0"
                                        y="0" /></mask><g
                                            clip-path="url(#clip0_693_16793-6)"
                                            id="g34-2"
                                            transform="matrix(0.62946008,0,0,0.62946008,276.77306,424.23217)"
                                            style="fill:none"><g
                                                mask="url(#mask0_693_16793-9)"
                                                id="g33"><path
                                            d="m 374.298,326.6944 v -16.698 c 0,-4.161 -3.12,-7.602 -7.276,-7.792 -27.473,-1.256 -126.447,-2.398 -187.77,41.383 -2.039,1.457 -3.202,3.827 -3.202,6.333 v 29.704"
                                            stroke="currentColor"
                                            stroke-width="8"
                                            stroke-miterlimit="10"
                                            id="path1-0"
                                        /><path
                                            d="m 905.526,326.6944 v -16.698 c 0,-4.161 3.12,-7.602 7.276,-7.792 27.474,-1.256 126.448,-2.398 187.768,41.383 2.04,1.457 3.2,3.827 3.2,6.333 v 29.704"
                                            stroke="currentColor"
                                            stroke-width="8"
                                            stroke-miterlimit="10"
                                            id="path2"
                                        /><path
                                            d="m 1306.08,1004.1594 c -25.21,-191.48 -78.54,-399.327 -126.04,-523.456 -46.54,-125.091 -169.68,-150.109 -285.052,-150.109 H 384.034 c -115.377,0 -238.51,25.018 -285.048,150.109 -46.5385,125.091 -99.86388082,331.976 -126.0418,523.456 -14.5433,95.26 55.2642,153 117.3156,159.73 62.0512,6.74 136.7072,-16.35 173.5502,-110.65 36.843,-93.34 52.356,-173.21 129.92,-173.21 65.929,0 424.663,0 490.593,0 77.564,0 93.077,79.87 129.917,173.21 36.85,93.33 111.5,117.39 173.55,110.65 62.05,-6.73 132.83,-64.47 118.29,-159.73 z"
                                            fill="#ffffff"
                                            fill-opacity="0.05"
                                            stroke="currentColor"
                                            stroke-width="10"
                                            stroke-miterlimit="10"
                                            id="path3" /><path
                                            d="m 349.335,517.7594 h -39.599 c -2.209,0 -4,-1.791 -4,-4 v -39.598 c 0,-18.408 -15.501,-33.909 -33.91,-33.909 -18.408,0 -33.909,15.501 -33.909,33.909 v 39.598 c 0,2.209 -1.791,4 -4,4 h -39.599 c -18.408,0 -33.91,15.501 -33.91,33.909 0,18.408 15.502,33.91 33.91,33.91 h 39.599 c 2.209,0 4,1.791 4,4 v 39.598 c 0,18.408 15.501,33.909 33.909,33.909 18.409,0 33.91,-15.501 33.91,-33.909 v -39.598 c 0,-2.209 1.791,-4 4,-4 h 39.599 c 18.408,0 33.91,-15.502 33.91,-33.91 0,-18.408 -14.533,-33.909 -33.91,-33.909 z"
                                            stroke="currentColor"
                                            stroke-width="6"
                                            stroke-miterlimit="10"
                                            id="path4" /><path
                                            d="m 441.98,822.9794 c 43.758,0 79.231,-35.476 79.231,-79.233 0,-43.758 -35.473,-79.23 -79.231,-79.23 -43.757,0 -79.23,35.472 -79.23,79.23 0,43.757 35.473,79.233 79.23,79.233 z"
                                            stroke="currentColor"
                                            opacity="0.3"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                            id="path5" /><path
                                            d="m 441.42,803.1684 c 32.818,0 59.423,-26.604 59.423,-59.422 0,-32.818 -26.605,-59.423 -59.423,-59.423 -32.819,0 -59.423,26.605 -59.423,59.423 0,32.818 26.604,59.422 59.423,59.422 z"
                                            stroke="currentColor"
                                            stroke-width="6"
                                            stroke-miterlimit="10"
                                            id="path6" /><path
                                            d="m 639.5,788.3124 c 24.614,0 44.567,-19.953 44.567,-44.566 0,-24.614 -19.953,-44.567 -44.567,-44.567 -24.613,0 -44.566,19.953 -44.566,44.567 0,24.613 19.953,44.566 44.566,44.566 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path7" /><path
                                            d="m 628.11,739.7604 c 13.935,-6.284 26.114,-2.496 32.619,0.679 0.61,0.297 1.341,-0.01 1.556,-0.653 l 1.902,-5.709 c 0.223,-0.667 -0.084,-1.395 -0.717,-1.704 -8.029,-3.922 -27.092,-10.177 -48.139,4.634 -0.545,0.385 -0.739,1.103 -0.468,1.712 l 4.442,9.998 c 0.299,0.674 1.069,1.001 1.762,0.747 5.084,-1.863 12.772,-3.816 20.742,-2.666 -5.394,0.913 -9.728,2.816 -13.056,4.859 -0.595,0.364 -0.83,1.11 -0.553,1.749 0,0 1.766,4.043 2.731,6.255 0.24,0.552 0.966,0.68 1.379,0.245 1.023,-1.081 2.156,-1.867 3.075,-2.401 4.305,-2.499 10.256,-4.35 18.302,-3.925 0.628,0.033 1.203,-0.358 1.401,-0.955 l 2.033,-6.1 c 0.204,-0.61 -0.032,-1.283 -0.575,-1.626 -5.967,-3.771 -15.156,-6.913 -28.472,-5.124 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path8"
                                        /><path
                                            d="m 837.574,822.9694 c 43.758,0 79.23,-35.468 79.23,-79.224 0,-43.757 -35.472,-79.229 -79.23,-79.229 -43.757,0 -79.229,35.472 -79.229,79.229 0,43.756 35.472,79.224 79.229,79.224 z"
                                            stroke="currentColor"
                                            opacity="0.3"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                            id="path9" /><path
                                            d="m 838.156,803.7784 c 32.818,0 59.422,-26.604 59.422,-59.422 0,-32.817 -26.604,-59.421 -59.422,-59.421 -32.818,0 -59.423,26.604 -59.423,59.421 0,32.818 26.605,59.422 59.423,59.422 z"
                                            stroke="currentColor"
                                            stroke-width="6"
                                            stroke-miterlimit="10"
                                            id="path10" /><path
                                            d="m 506.295,479.8024 c 13.031,0 23.788,-11.067 23.788,-24.284 0,-13.216 -10.757,-24.283 -23.788,-24.283 h -35.654 c -13.031,0 -23.787,11.067 -23.787,24.283 0,13.217 10.756,24.284 23.787,24.284 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path11"
                                            style="fill:none;stroke:currentColor;stroke-opacity:1" /><path
                                            d="m 478.565,455.3004 c 0,2.735 -2.217,4.952 -4.952,4.952 -2.735,0 -4.952,-2.217 -4.952,-4.952 0,-2.735 2.217,-4.952 4.952,-4.952 2.735,0 4.952,2.217 4.952,4.952 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path12"
                                        /><path
                                            d="m 493.42,455.3004 c 0,2.735 -2.217,4.952 -4.951,4.952 -2.735,0 -4.952,-2.217 -4.952,-4.952 0,-2.735 2.217,-4.952 4.952,-4.952 2.734,0 4.951,2.217 4.951,4.952 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path13"
                                        /><path
                                            d="m 508.276,455.3004 c 0,2.735 -2.217,4.952 -4.952,4.952 -2.735,0 -4.952,-2.217 -4.952,-4.952 0,-2.735 2.217,-4.952 4.952,-4.952 2.735,0 4.952,2.217 4.952,4.952 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path14"
                                        /><path
                                            d="m 545.415,582.3724 c 16.146,0 29.235,-13.089 29.235,-29.235 0,-16.147 -13.089,-29.236 -29.235,-29.236 -16.146,0 -29.235,13.089 -29.235,29.236 0,16.146 13.089,29.235 29.235,29.235 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path15" /><path
                                            d="m 559.135,548.7664 c -0.602,0 -1.119,-0.204 -1.552,-0.613 -0.41,-0.434 -0.614,-0.951 -0.614,-1.553 0,-0.602 0.204,-1.107 0.614,-1.516 0.433,-0.434 0.95,-0.65 1.552,-0.65 0.602,0 1.108,0.216 1.517,0.65 0.433,0.409 0.65,0.914 0.65,1.516 0,0.602 -0.217,1.119 -0.65,1.553 -0.409,0.409 -0.915,0.613 -1.517,0.613 z m -6.499,7.222 c -1.204,0 -2.227,-0.421 -3.069,-1.264 -0.843,-0.842 -1.264,-1.865 -1.264,-3.069 0,-1.204 0.421,-2.227 1.264,-3.069 0.842,-0.843 1.865,-1.264 3.069,-1.264 1.204,0 2.227,0.421 3.069,1.264 0.843,0.842 1.264,1.865 1.264,3.069 0,1.204 -0.421,2.227 -1.264,3.069 -0.842,0.843 -1.865,1.264 -3.069,1.264 z m 0,11.554 c -1.396,0 -2.588,-0.493 -3.575,-1.48 -0.987,-0.987 -1.48,-2.179 -1.48,-3.575 0,-1.396 0.493,-2.587 1.48,-3.574 0.987,-0.987 2.179,-1.481 3.575,-1.481 1.396,0 2.588,0.494 3.575,1.481 0.987,0.987 1.48,2.178 1.48,3.574 0,1.396 -0.493,2.588 -1.48,3.575 -0.987,0.987 -2.179,1.48 -3.575,1.48 z m -14.443,-11.554 c -2.407,0 -4.453,-0.843 -6.138,-2.528 -1.685,-1.685 -2.528,-3.731 -2.528,-6.138 0,-2.407 0.843,-4.453 2.528,-6.138 1.685,-1.685 3.731,-2.528 6.138,-2.528 2.407,0 4.453,0.843 6.138,2.528 1.685,1.685 2.528,3.731 2.528,6.138 0,2.407 -0.843,4.453 -2.528,6.138 -1.685,1.685 -3.731,2.528 -6.138,2.528 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path16" /><path
                                            d="m 732.802,582.3714 c 16.146,0 29.235,-13.089 29.235,-29.235 0,-16.146 -13.089,-29.235 -29.235,-29.235 -16.146,0 -29.236,13.089 -29.236,29.235 0,16.146 13.09,29.235 29.236,29.235 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path17" /><path
                                            d="m 719.349,566.0984 v -9.145 h 3.249 v 5.895 h 5.896 v 3.25 z m 0,-16.898 v -9.099 h 9.145 v 3.249 h -5.896 v 5.85 z m 16.898,16.898 v -3.25 h 5.849 v -5.895 h 3.25 v 9.145 z m 5.849,-16.898 v -5.85 h -5.849 v -3.249 h 9.099 v 9.099 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path18" /><path
                                            d="m 808.203,479.8024 c 13.031,0 23.788,-11.067 23.788,-24.284 0,-13.216 -10.757,-24.283 -23.788,-24.283 H 772.55 c -13.031,0 -23.788,11.067 -23.788,24.283 0,13.217 10.757,24.284 23.788,24.284 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path19" /><path
                                            d="m 774.747,465.8234 v -3.157 h 31.568 v 3.157 z m 0,-8.944 v -3.157 h 31.568 v 3.157 z m 0,-8.945 v -3.156 h 31.568 v 3.156 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path20" /><path
                                            d="m 1019.24,676.4204 c 22.99,0 41.62,-18.632 41.62,-41.615 0,-22.983 -18.63,-41.615 -41.62,-41.615 -22.97898,0 -41.611,18.632 -41.611,41.615 0,22.983 18.63202,41.615 41.611,41.615 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path21" /><path
                                            d="m 1006.98,648.4234 10.69,-28.365 h 4.95 l 10.74,28.365 h -4.79 l -2.62,-7.29 h -11.57 l -2.61,7.29 z m 17.51,-11.33 -3.13,-8.676 -1.07,-3.248 h -0.24 l -1.07,3.248 -3.13,8.676 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path22" /><path
                                            d="m 935.374,592.1454 c 22.983,0 41.614,-18.632 41.614,-41.615 0,-22.983 -18.631,-41.615 -41.614,-41.615 -22.984,0 -41.615,18.632 -41.615,41.615 0,22.983 18.631,41.615 41.615,41.615 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path23" /><path
                                            d="m 923.628,535.8774 h 5.348 l 6.299,10.181 h 0.237 l 6.339,-10.181 h 5.308 l -8.834,13.627 9.468,14.737 h -5.308 l -6.973,-11.052 h -0.237 l -6.972,11.052 h -5.309 l 9.468,-14.737 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path24" /><path
                                            d="m 1019.24,508.0574 c 22.99,0 41.62,-18.632 41.62,-41.615 0,-22.983 -18.63,-41.615 -41.62,-41.615 -22.97898,0 -41.611,18.632 -41.611,41.615 0,22.983 18.63202,41.615 41.611,41.615 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path25" /><path
                                            d="m 1017.49,479.9514 v -13.152 l -9.59,-15.212 h 5.15 l 6.46,10.696 h 0.24 l 6.3,-10.696 h 5.19 l -9.43,15.212 v 13.152 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path26" /><path
                                            d="m 1103.74,592.1454 c 22.98,0 41.61,-18.632 41.61,-41.615 0,-22.983 -18.63,-41.615 -41.61,-41.615 -22.99,0 -41.62,18.632 -41.62,41.615 0,22.983 18.63,41.615 41.62,41.615 z"
                                            stroke="currentColor"
                                            stroke-width="4"
                                            stroke-miterlimit="10"
                                            id="path27" /><path
                                            d="m 1095.17,564.2414 v -28.364 h 10.61 c 1.56,0 2.97,0.33 4.24,0.99 1.27,0.661 2.27,1.558 3.01,2.694 0.77,1.136 1.15,2.417 1.15,3.843 0,1.452 -0.36,2.694 -1.07,3.724 -0.71,1.03 -1.64,1.809 -2.77,2.337 v 0.198 c 1.42,0.475 2.59,1.294 3.48,2.456 0.9,1.162 1.35,2.549 1.35,4.16 0,1.584 -0.41,2.971 -1.23,4.159 -0.79,1.189 -1.87,2.126 -3.24,2.813 -1.35,0.66 -2.83,0.99 -4.44,0.99 z m 4.35,-12.558 v 8.517 h 6.74 c 0.95,0 1.77,-0.198 2.45,-0.594 0.69,-0.396 1.21,-0.924 1.55,-1.584 0.37,-0.661 0.55,-1.347 0.55,-2.06 0,-0.766 -0.18,-1.466 -0.55,-2.1 -0.37,-0.66 -0.91,-1.188 -1.62,-1.585 -0.69,-0.396 -1.54,-0.594 -2.54,-0.594 z m 0,-3.882 h 6.06 c 0.93,0 1.71,-0.185 2.34,-0.555 0.66,-0.396 1.16,-0.898 1.51,-1.505 0.34,-0.634 0.51,-1.281 0.51,-1.941 0,-0.66 -0.17,-1.281 -0.51,-1.862 -0.32,-0.607 -0.79,-1.096 -1.43,-1.466 -0.63,-0.396 -1.39,-0.594 -2.26,-0.594 h -6.22 z"
                                            fill="currentColor"
                                            opacity="0.5"
                                            id="path28" /><g
                                            filter="url(#filter1_d_693_16793)"
                                            id="g31"
                                            style="filter:url(#filter1_d_693_16793-1)"
                                            transform="translate(1.8206821e-7,-187.9906)" /><g
                                            filter="url(#filter2_d_693_16793)"
                                            id="g32"
                                            style="filter:url(#filter2_d_693_16793-1)"
                                            transform="translate(1.8206821e-7,-187.9906)" /></g><g
                                        filter="url(#filter0_d_693_16793)"
                                        id="g1"
                                        style="filter:url(#filter0_d_693_16793-0)" /><mask
                                            id="mask0_693_16793-9"
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="1280"
                                            height="960"><rect
                                            width="1280"
                                            height="960"
                                            fill="url(#paint0_linear_693_16793)"
                                            id="rect1-6"
                                            x="0"
                                            y="0" />
                                    </mask>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

        </div>
    );
});