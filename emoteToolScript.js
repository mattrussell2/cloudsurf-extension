// emoteToolScript.js
// 
//  this script should be activated whenever a user visits a site that
//  we think they may want to react to

// ------------------DATA-------------------------

// SVG for gradient button background
var gradientBackgroundSVG = '<svg viewBox="0 0 600 245" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <rect width="602" height="241" rx="28" fill="#C4C4C4"/> <rect width="602" height="241" rx="28" fill="url(#paint0_linear)"/> </g> <defs> <filter id="filter0_d" x="0" y="0" width="602" height="245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="4"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> <linearGradient id="paint0_linear" x1="301" y1="0" x2="301" y2="241" gradientUnits="userSpaceOnUse"> <stop offset="0.0913884" stop-color="#B7094C"/> <stop offset="0.317708" stop-color="#892B64"/> <stop offset="0.541667" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </linearGradient> </defs> </svg>'
// SVG for white box button background
var whiteBoxBackgroundSVG = '<svg viewBox="0 0 600 245" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <rect width="536" height="241" rx="28" fill="white"/> <rect width="536" height="241" rx="28" fill="white"/> </g> <defs> <filter id="filter0_d" x="0" y="0" width="536" height="245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="4"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg> '
// SVG for cloud
var cloudSVG = '<svg viewBox="0 0 247 167" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <g filter="url(#filter1_d)"> <path d="M207.11 67.2906H207.092C207.092 67.1693 207.11 67.0481 207.11 66.9269C207.11 50.3886 193.346 36.9675 176.345 36.9675C174.157 36.9675 172.023 37.1926 169.978 37.6256C163.879 23.1827 149.314 13 132.277 13C119.491 13 108.092 18.7494 100.623 27.7199C95.6641 25.2643 90.1805 23.9827 84.6176 23.9793C66.2117 23.9793 51.0957 37.6256 49.3352 55.099C29.3288 56.1381 13.2703 72.1049 13.0035 91.9335C12.719 112.576 29.7022 129.547 50.9001 129.807C52.554 129.824 54.1545 129.72 55.755 129.53C63.9532 146.363 81.541 158 101.939 158C114.245 158 125.52 153.757 134.34 146.709C141.08 151.575 149.403 154.485 158.437 154.485C176.967 154.485 192.563 142.38 197.418 125.841C200.477 126.828 203.731 127.383 207.128 127.383C224.165 127.383 237.982 113.927 237.982 97.3365C237.965 80.7463 224.165 67.2906 207.11 67.2906Z" fill="white"/> </g> <g filter="url(#filter2_d)"> <path d="M225.249 73.0227C232.238 79.8978 227.294 95.6568 222.493 100.8C213.032 110.896 195.675 108.541 188.704 107.086C186.819 106.688 186.517 106.827 185.894 107.19C185.343 107.519 185.094 108.039 184.489 109.268C182.249 113.979 176.451 123.105 164.216 126.776C151.466 130.604 139.444 124.768 133.824 121.287C131.69 119.971 131.601 119.936 130.641 119.953C129.663 119.971 128.703 120.663 127.547 121.547C122.461 125.443 110.848 132.318 92.9402 131.314C75.3879 130.327 65.3402 119.797 61.8902 114.377C61.2322 113.338 60.5209 112.472 59.7028 112.386C58.7603 112.299 57.7111 113.234 56.9286 113.996C49.4596 121.079 25.9498 123.209 18.1606 111.139C26.0921 123.521 38.3449 129.651 50.9178 129.807C52.5717 129.824 54.1722 129.72 55.7727 129.53C63.9709 146.363 81.5587 158 101.956 158C114.263 158 125.537 153.757 134.358 146.709C141.098 151.575 149.42 154.485 158.454 154.485C176.985 154.485 192.581 142.38 197.436 125.841C200.495 126.828 203.749 127.383 207.146 127.383C224.182 127.383 238 113.927 238 97.3366C237.964 88.5046 233.412 78.5297 225.249 73.0227V73.0227Z" fill="#7E98A8"/> <path d="M225.249 73.0227C232.238 79.8978 227.294 95.6568 222.493 100.8C213.032 110.896 195.675 108.541 188.704 107.086C186.819 106.688 186.517 106.827 185.894 107.19C185.343 107.519 185.094 108.039 184.489 109.268C182.249 113.979 176.451 123.105 164.216 126.776C151.466 130.604 139.444 124.768 133.824 121.287C131.69 119.971 131.601 119.936 130.641 119.953C129.663 119.971 128.703 120.663 127.547 121.547C122.461 125.443 110.848 132.318 92.9402 131.314C75.3879 130.327 65.3402 119.797 61.8902 114.377C61.2322 113.338 60.5209 112.472 59.7028 112.386C58.7603 112.299 57.7111 113.234 56.9286 113.996C49.4596 121.079 25.9498 123.209 18.1606 111.139C26.0921 123.521 38.3449 129.651 50.9178 129.807C52.5717 129.824 54.1722 129.72 55.7727 129.53C63.9709 146.363 81.5587 158 101.956 158C114.263 158 125.537 153.757 134.358 146.709C141.098 151.575 149.42 154.485 158.454 154.485C176.985 154.485 192.581 142.38 197.436 125.841C200.495 126.828 203.749 127.383 207.146 127.383C224.182 127.383 238 113.927 238 97.3366C237.964 88.5046 233.412 78.5297 225.249 73.0227V73.0227Z" fill="url(#paint0_radial)"/> </g> </g> <defs> <filter id="filter0_d" x="0" y="0" width="247" height="167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dx="-2" dy="-2"/> <feGaussianBlur stdDeviation="5.5"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> <filter id="filter1_d" x="9" y="9" width="232.982" height="153" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset/> <feGaussianBlur stdDeviation="2"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> <filter id="filter2_d" x="18.1606" y="73.0227" width="219.839" height="88.9773" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="4"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.7452 149.778) rotate(-17.7111) scale(203.92 1257.1)"> <stop offset="0.0913884" stop-color="#B7094C"/> <stop offset="0.317708" stop-color="#892B64"/> <stop offset="0.541667" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </radialGradient> </defs> </svg>'
// SVG for reaction button
var reactButtonSVG = '<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M73.7448 40.5573C73.7448 41.8037 73.671 43.0353 73.5457 44.2448H80.9575C81.7144 35.9424 79.8946 27.6085 75.7459 20.3772C71.5972 13.146 65.3211 7.3687 57.7718 3.83167C50.2225 0.294642 41.7667 -0.830326 33.5553 0.609877C25.3438 2.05008 17.7755 5.9855 11.8805 11.8805C5.9855 17.7755 2.05008 25.3438 0.609877 33.5553C-0.830326 41.7667 0.294642 50.2225 3.83167 57.7718C7.3687 65.3211 13.146 71.5972 20.3772 75.7459C27.6085 79.8946 35.9424 81.7143 44.2448 80.9575V73.5457C37.5654 74.2924 30.8166 72.9936 24.8915 69.821C18.9664 66.6485 14.1442 61.7517 11.0629 55.7785C7.98166 49.8054 6.78657 43.0376 7.63578 36.3704C8.48498 29.7032 11.3385 23.451 15.8187 18.441C20.2989 13.4311 26.1946 9.89942 32.7259 8.31342C39.2571 6.72742 46.1159 7.16181 52.3949 9.55912C58.6738 11.9564 64.0769 16.2037 67.8893 21.7388C71.7016 27.274 73.7435 33.8363 73.7448 40.5573ZM25.8073 36.8698C27.7633 36.8698 29.6391 36.0928 31.0222 34.7097C32.4053 33.3266 33.1823 31.4508 33.1823 29.4948C33.1823 27.5388 32.4053 25.663 31.0222 24.2799C29.6391 22.8968 27.7633 22.1198 25.8073 22.1198C23.8513 22.1198 21.9755 22.8968 20.5924 24.2799C19.2093 25.663 18.4323 27.5388 18.4323 29.4948C18.4323 31.4508 19.2093 33.3266 20.5924 34.7097C21.9755 36.0928 23.8513 36.8698 25.8073 36.8698ZM40.5573 55.3073C45.8083 55.3073 50.5504 53.1095 53.9061 49.5843L59.1202 54.8058C56.7155 57.3006 53.8319 59.2841 50.6422 60.6376C47.4525 61.991 44.0223 62.6865 40.5573 62.6823C37.0238 62.6866 33.5272 61.9633 30.2854 60.5575C27.0435 59.1516 24.1259 57.0933 21.7142 54.5108L26.9283 49.2893C28.6546 51.1875 30.759 52.7036 33.1062 53.74C35.4534 54.7764 37.9915 55.3103 40.5573 55.3073ZM55.3073 36.8698C57.2633 36.8698 59.1391 36.0928 60.5222 34.7097C61.9053 33.3266 62.6823 31.4508 62.6823 29.4948C62.6823 27.5388 61.9053 25.663 60.5222 24.2799C59.1391 22.8968 57.2633 22.1198 55.3073 22.1198C53.3513 22.1198 51.4755 22.8968 50.0924 24.2799C48.7093 25.663 47.9323 27.5388 47.9323 29.4948C47.9323 31.4508 48.7093 33.3266 50.0924 34.7097C51.4755 36.0928 53.3513 36.8698 55.3073 36.8698ZM73.7448 58.9948H81.1198V73.7448H95.8698V81.1198H81.1198V95.8698H73.7448V81.1198H58.9948V73.7448H73.7448V58.9948Z" fill="#525252"/> </svg>'

var settingsSVG = ' <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <path d="M23.1182 10.6875C18.4869 10.6875 14.8057 14.3687 14.8057 19C14.8057 23.6312 18.4869 27.3125 23.1182 27.3125C27.7494 27.3125 31.4307 23.6312 31.4307 19C31.4307 14.3687 27.7494 10.6875 23.1182 10.6875ZM23.1182 24.9375C19.7932 24.9375 17.1807 22.325 17.1807 19C17.1807 15.675 19.7932 13.0625 23.1182 13.0625C26.4432 13.0625 29.0557 15.675 29.0557 19C29.0557 22.325 26.4432 24.9375 23.1182 24.9375Z" fill="white"/> <path d="M40.575 15.0813L37.25 14.0125L36.5375 12.2312L38.2 9.14375C38.5563 8.43125 38.4375 7.48125 37.8438 6.8875L34.9938 4.0375C34.4 3.44375 33.45 3.325 32.7375 3.68125L29.65 5.34375L27.8688 4.63125L26.8 1.30625C26.5625 0.59375 25.85 0 25.0188 0H20.9813C20.15 0 19.4375 0.59375 19.3188 1.425L18.25 4.75C17.5375 4.86875 16.9438 5.10625 16.35 5.4625L13.2625 3.8C12.55 3.44375 11.6 3.5625 11.0063 4.15625L8.15625 7.00625C7.5625 7.6 7.44375 8.55 7.8 9.2625L9.34375 12.2312C9.10625 12.825 8.86875 13.5375 8.63125 14.1312L5.30625 15.2C4.59375 15.4375 4 16.15 4 16.9812V21.0188C4 21.85 4.59375 22.5625 5.425 22.8L8.75 23.8687L9.4625 25.65L7.8 28.7375C7.44375 29.45 7.5625 30.4 8.15625 30.9937L11.0063 33.8438C11.6 34.4375 12.55 34.5562 13.2625 34.2L16.35 32.5375L18.1313 33.25L19.2 36.6938C19.4375 37.4062 20.15 38 20.9813 38H25.0188C25.85 38 26.5625 37.4062 26.8 36.6938L27.8688 33.25L29.65 32.5375L32.7375 34.2C33.45 34.5562 34.4 34.4375 34.9938 33.8438L37.8438 30.9937C38.4375 30.4 38.5563 29.45 38.2 28.7375L36.5375 25.65L37.25 23.8687L40.6938 22.8C41.4063 22.5625 42 21.85 42 21.0188V16.9812C42 16.15 41.4063 15.3187 40.575 15.0813ZM39.625 20.6625L35.35 21.9688L35.2313 22.5625L34.1625 25.0562L33.8063 25.65L35.9438 29.5688L33.5688 31.9438L29.65 29.8062L29.0563 30.1625C28.225 30.6375 27.3938 30.9937 26.5625 31.2312L25.9688 31.35L24.6625 35.625H21.3375L20.0313 31.35L19.4375 31.2312L16.9438 30.1625L16.35 29.8062L12.4313 31.9438L10.0563 29.5688L12.1938 25.65L11.8375 25.0562C11.3625 24.225 11.0063 23.3937 10.7688 22.5625L10.65 21.9688L6.375 20.6625V17.3375L10.4125 16.15L10.65 15.5563C10.8875 14.6063 11.2438 13.775 11.7188 12.9437L12.075 12.35L10.0563 8.43125L12.4313 6.05625L16.2313 8.19375L16.825 7.8375C17.6563 7.3625 18.4875 7.00625 19.4375 6.76875L20.0313 6.53125L21.3375 2.375H24.6625L25.9688 6.53125L26.5625 6.76875C27.3938 7.00625 28.225 7.3625 29.0563 7.8375L29.65 8.19375L33.5688 6.05625L35.9438 8.43125L33.8063 12.35L34.1625 12.9437C34.6375 13.775 34.9938 14.6062 35.2313 15.4375L35.35 16.0312L39.625 17.3375V20.6625Z" fill="white"/> </g> <defs> <filter id="filter0_d" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="2"/> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg> '



//SVG logo as a string, so it can be used as the innerhtml of a div
// var cloudWithEmoji =  '<svg id="buttonSVG" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="SmileySurfer"> <g id="Outline"> <g id="Rectangle 7"> <rect width="242" height="241" rx="56" fill="white"/> <rect width="242" height="241" rx="56" fill="url(#paint0_linear)"/> </g> </g> <g id="Cloud"> <path id="Vector" d="M206.594 105.932H206.575C206.575 105.806 206.594 105.679 206.594 105.552C206.594 88.2425 192.081 74.1956 174.156 74.1956C171.85 74.1956 169.6 74.4312 167.444 74.8844C161.013 59.7681 145.656 49.1106 127.694 49.1106C114.213 49.1106 102.194 55.1281 94.3188 64.5169C89.0907 61.9468 83.3091 60.6054 77.4438 60.6019C58.0375 60.6019 42.1001 74.8844 40.2438 93.1725C19.1501 94.26 2.2188 110.971 1.93755 131.724C1.63755 153.329 19.5438 171.092 41.8938 171.364C43.6376 171.382 45.3251 171.273 47.0126 171.074C55.6563 188.691 74.2 200.871 95.7063 200.871C108.681 200.871 120.569 196.431 129.869 189.054C136.975 194.147 145.75 197.192 155.275 197.192C174.813 197.192 191.256 184.522 196.375 167.213C199.6 168.246 203.031 168.826 206.613 168.826C224.575 168.826 239.144 154.743 239.144 137.379C239.125 120.016 224.575 105.932 206.594 105.932Z" fill="white"/> </g> <g id="Smile"> <g id="Smile_2"> <rect width="79" height="79" transform="translate(83 81)" fill="white"/> <g id="Vector_2"> <path d="M122.5 87.5833C104.35 87.5833 89.5833 102.35 89.5833 120.5C89.5833 138.65 104.35 153.417 122.5 153.417C140.65 153.417 155.417 138.65 155.417 120.5C155.417 102.35 140.65 87.5833 122.5 87.5833ZM122.5 146.833C107.98 146.833 96.1666 135.02 96.1666 120.5C96.1666 105.98 107.98 94.1667 122.5 94.1667C137.019 94.1667 148.833 105.98 148.833 120.5C148.833 135.02 137.019 146.833 122.5 146.833Z" fill="black"/> <path d="M122.5 87.5833C104.35 87.5833 89.5833 102.35 89.5833 120.5C89.5833 138.65 104.35 153.417 122.5 153.417C140.65 153.417 155.417 138.65 155.417 120.5C155.417 102.35 140.65 87.5833 122.5 87.5833ZM122.5 146.833C107.98 146.833 96.1666 135.02 96.1666 120.5C96.1666 105.98 107.98 94.1667 122.5 94.1667C137.019 94.1667 148.833 105.98 148.833 120.5C148.833 135.02 137.019 146.833 122.5 146.833Z" fill="url(#paint1_linear)"/> </g> <g id="Vector_3"> <path d="M131.812 129.809C130.609 131.008 129.188 131.967 127.625 132.633C124.812 133.821 121.673 133.994 118.746 133.124C115.819 132.253 113.285 130.392 111.578 127.86L106.121 131.544C107.544 133.644 109.355 135.454 111.456 136.876C113.595 138.322 115.998 139.332 118.527 139.848C121.15 140.383 123.853 140.383 126.476 139.848C129.005 139.331 131.408 138.321 133.547 136.876C134.577 136.178 135.561 135.368 136.463 134.47C137.359 133.578 138.175 132.59 138.879 131.544L133.422 127.86C132.949 128.56 132.41 129.212 131.812 129.809Z" fill="black"/> <path d="M131.812 129.809C130.609 131.008 129.188 131.967 127.625 132.633C124.812 133.821 121.673 133.994 118.746 133.124C115.819 132.253 113.285 130.392 111.578 127.86L106.121 131.544C107.544 133.644 109.355 135.454 111.456 136.876C113.595 138.322 115.998 139.332 118.527 139.848C121.15 140.383 123.853 140.383 126.476 139.848C129.005 139.331 131.408 138.321 133.547 136.876C134.577 136.178 135.561 135.368 136.463 134.47C137.359 133.578 138.175 132.59 138.879 131.544L133.422 127.86C132.949 128.56 132.41 129.212 131.812 129.809Z" fill="url(#paint2_linear)"/> </g> <g id="Vector_4"> <path d="M110.979 120.5C113.706 120.5 115.917 118.289 115.917 115.562C115.917 112.836 113.706 110.625 110.979 110.625C108.252 110.625 106.042 112.836 106.042 115.562C106.042 118.289 108.252 120.5 110.979 120.5Z" fill="black"/> <path d="M110.979 120.5C113.706 120.5 115.917 118.289 115.917 115.562C115.917 112.836 113.706 110.625 110.979 110.625C108.252 110.625 106.042 112.836 106.042 115.562C106.042 118.289 108.252 120.5 110.979 120.5Z" fill="url(#paint3_linear)"/> </g> <g id="Vector_5"> <path d="M133.998 120.454C136.712 120.454 138.912 118.254 138.912 115.539C138.912 112.825 136.712 110.625 133.998 110.625C131.284 110.625 129.083 112.825 129.083 115.539C129.083 118.254 131.284 120.454 133.998 120.454Z" fill="black"/> <path d="M133.998 120.454C136.712 120.454 138.912 118.254 138.912 115.539C138.912 112.825 136.712 110.625 133.998 110.625C131.284 110.625 129.083 112.825 129.083 115.539C129.083 118.254 131.284 120.454 133.998 120.454Z" fill="url(#paint4_linear)"/> </g> </g> </g> <g id="Cloud-Shadow"> <path id="Vector_6" d="M225.719 111.932C233.087 119.128 227.875 135.621 222.812 141.004C212.838 151.571 194.538 149.106 187.188 147.584C185.2 147.167 184.881 147.312 184.225 147.693C183.644 148.037 183.381 148.581 182.744 149.868C180.381 154.798 174.269 164.349 161.369 168.192C147.925 172.198 135.25 166.089 129.325 162.446C127.075 161.069 126.981 161.033 125.969 161.051C124.938 161.069 123.925 161.794 122.706 162.718C117.344 166.796 105.1 173.992 86.2188 172.941C67.7125 171.907 57.1188 160.888 53.4813 155.214C52.7875 154.127 52.0375 153.221 51.175 153.13C50.1813 153.039 49.075 154.018 48.25 154.816C40.375 162.229 15.5875 164.458 7.375 151.825C15.7375 164.784 28.6562 171.201 41.9125 171.364C43.6562 171.382 45.3438 171.273 47.0312 171.074C55.675 188.691 74.2188 200.871 95.725 200.871C108.7 200.871 120.587 196.431 129.887 189.054C136.994 194.147 145.769 197.192 155.294 197.192C174.831 197.192 191.275 184.523 196.394 167.213C199.619 168.246 203.05 168.826 206.631 168.826C224.594 168.826 239.162 154.743 239.162 137.379C239.125 128.136 234.325 117.696 225.719 111.932Z" fill="#7E98A8"/> </g> </g> <defs> <linearGradient id="paint0_linear" x1="121" y1="0" x2="121" y2="241" gradientUnits="userSpaceOnUse"> <stop offset="0.0913884" stop-color="#B7094C"/> <stop offset="0.317708" stop-color="#892B64"/> <stop offset="0.541667" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </linearGradient> <linearGradient id="paint1_linear" x1="122.5" y1="87.5833" x2="122.5" y2="153.417" gradientUnits="userSpaceOnUse"> <stop offset="0.0913884" stop-color="#B7094C"/> <stop offset="0.317708" stop-color="#892B64"/> <stop offset="0.541667" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </linearGradient> <linearGradient id="paint2_linear" x1="122.5" y1="127.86" x2="122.5" y2="140.25" gradientUnits="userSpaceOnUse"> <stop stop-color="#892B64"/> <stop offset="0.421875" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </linearGradient> <linearGradient id="paint3_linear" x1="110.979" y1="110.625" x2="110.979" y2="120.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0913884" stop-color="#B7094C"/> <stop offset="0.546875" stop-color="#892B64"/> <stop offset="0.90625" stop-color="#5C4D7D"/> </linearGradient> <linearGradient id="paint4_linear" x1="133.998" y1="110.625" x2="133.998" y2="120.454" gradientUnits="userSpaceOnUse"> <stop offset="0.223958" stop-color="#B7094C"/> <stop offset="0.583333" stop-color="#892B64"/> <stop offset="0.770833" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </linearGradient> </defs> </svg>'
// var cloudNoEmoji   =  '<svg id="buttonSVG" viewBox="0 0 242 241" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Cloudsurf Icon"> <g id="Cloud-Background"> <g id="Rectangle 7"> <rect width="242" height="241" rx="56" fill="white"/> <rect width="242" height="241" rx="56" fill="url(#paint0_linear)"/> </g> </g> <g id="Cloud"> <path id="Vector" d="M206.594 105.932H206.575C206.575 105.806 206.594 105.679 206.594 105.552C206.594 88.2425 192.081 74.1956 174.156 74.1956C171.85 74.1956 169.6 74.4312 167.444 74.8844C161.013 59.7681 145.656 49.1106 127.694 49.1106C114.213 49.1106 102.194 55.1281 94.3188 64.5169C89.0907 61.9468 83.3091 60.6054 77.4438 60.6019C58.0375 60.6019 42.1001 74.8844 40.2438 93.1725C19.1501 94.26 2.2188 110.971 1.93755 131.724C1.63755 153.329 19.5438 171.092 41.8938 171.364C43.6376 171.382 45.3251 171.273 47.0126 171.074C55.6563 188.691 74.2 200.871 95.7063 200.871C108.681 200.871 120.569 196.431 129.869 189.054C136.975 194.147 145.75 197.192 155.275 197.192C174.813 197.192 191.256 184.522 196.375 167.213C199.6 168.246 203.031 168.826 206.613 168.826C224.575 168.826 239.144 154.743 239.144 137.379C239.125 120.016 224.575 105.932 206.594 105.932Z" fill="white"/> </g> <g id="Cloud-Shadow"> <path id="Vector_2" d="M225.719 111.932C233.087 119.128 227.875 135.621 222.812 141.004C212.838 151.571 194.538 149.106 187.188 147.584C185.2 147.167 184.881 147.312 184.225 147.693C183.644 148.037 183.381 148.581 182.744 149.868C180.381 154.798 174.269 164.349 161.369 168.192C147.925 172.198 135.25 166.089 129.325 162.446C127.075 161.069 126.981 161.033 125.969 161.051C124.938 161.069 123.925 161.794 122.706 162.718C117.344 166.796 105.1 173.992 86.2188 172.941C67.7125 171.907 57.1188 160.888 53.4813 155.214C52.7875 154.127 52.0375 153.221 51.175 153.13C50.1813 153.039 49.075 154.018 48.25 154.816C40.375 162.229 15.5875 164.458 7.375 151.825C15.7375 164.784 28.6562 171.201 41.9125 171.364C43.6562 171.382 45.3438 171.273 47.0312 171.074C55.675 188.691 74.2188 200.871 95.725 200.871C108.7 200.871 120.587 196.431 129.887 189.054C136.994 194.147 145.769 197.192 155.294 197.192C174.831 197.192 191.275 184.523 196.394 167.213C199.619 168.246 203.05 168.826 206.631 168.826C224.594 168.826 239.162 154.743 239.162 137.379C239.125 128.136 234.325 117.696 225.719 111.932Z" fill="#7E98A8"/> </g> </g> <defs> <linearGradient id="paint0_linear" x1="121" y1="0" x2="121" y2="241" gradientUnits="userSpaceOnUse"> <stop offset="0.0913884" stop-color="#B7094C"/> <stop offset="0.317708" stop-color="#892B64"/> <stop offset="0.541667" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </linearGradient> </defs> </svg> '

//unicodes corresponding to emoticons
// var emotions = [ 
//     "128544",  //angry
//     "128546",  //crying
//     "128552",  //afraid
//     "128562",  //astonished
//     "128578",  //smiling
//     "128525",  //love
//     "128514",  //laugh
//     "128526",  //chill
//     "129320",  //oh?
//    ];

//----------------DOM RENDERING-------------------


// getting user identifiers and settings
var email, userid, rows, cols, size;
chrome.storage.sync.get(['email', 'id','rows','cols','size'], function(result) {	
    email  = result.email;
    userid = result.id;
    rows   = result.rows;
    cols   = result.cols;
    size   = result.size;
    //just actually calling drawScreen
    drawScreen("left", size, 1, 1, emotions, rows, cols);
    getUserReact(window.location.href, userid)
});


// --------with extensions, we can't just write
// --------HTML files, so we have to do it
// --------ourselves. TODO implement "align" functionality


// function: drawScreen
// purpose:  instantiates all of the html necessary for the emotion tool
// arguments:
//          align : "left" or "right" - a user preference that allows users
//                  to describe the direction that the react container
//                  should open in
//          size  : integers that describes the scaling of the original button
//                  (in rems) -> the reacts themselves will be scaled
//                  proportionally
//           x,y  : integers - a user preference that describes how far to
//                  the right (x) and how far down up from the bottom (y) 
//                  their emotion tool appears on each page
//      emoticons : an array of emotion unicode strings corresponding to
//                  emotions that will be rendered on button click
//      rows, cols: integers - user preference that describes the numebr of
//                  rows and columns that their array of emotions has
function drawScreen(align, size, x, y, emoticons, rows, cols)
{
    alert("drawScreen");
    reactBox             = makeReactBox(size, x, y);
    reactButtonContainer = makeButtonContainer(size, x, y);
    reactBox.append(reactButtonContainer);
    // reactContain  = makeReacts(align, size, x, y, emoticons, rows, cols)
    // selectedReact = makeSelectedReact(size); 

    // reactButton.append(selectedReact);
    // document.body.append(reactContain);

    document.body.append(reactBox);
}

// function makeReactBox
// purpose: make the div and set the basic attributes of the react
//          button
// arguments: 
//          size: integer (in rem) gets assigned to width and height
//          x,y : integers (in % of screen) get assigned to left
//                  and bottom, respectively
// returns:
//          the DOM div element itself
function makeReactBox(size, x, y)
{
    // alert("makeReactBox");
    //generate the react box
    var reactContainer = document.createElement( 'div' );
    reactContainer.setAttribute("id", "reactContainer");
    // reactContainer.onclick      = function(){alert("This works!!!")};
    
    var containerDiv = document.createElement('div');
    containerDiv.setAttribute("id","containerSVG")

    var gradientSVGDiv       = document.createElement('div');
    gradientSVGDiv.innerHTML = gradientBackgroundSVG;
    gradientSVGDiv.setAttribute('id',"gradientSVG")

    var whiteBoxSVGDiv       = document.createElement('div');
    whiteBoxSVGDiv.innerHTML = whiteBoxBackgroundSVG;
    whiteBoxSVGDiv.setAttribute('id',"whiteBoxSVG")
    
    containerDiv.append(gradientSVGDiv);
    containerDiv.append(whiteBoxSVGDiv);

    reactContainer.append(containerDiv);
    
    return reactContainer;
}

function makeButtonContainer(size, x, y)
{
    //generate the react Button
    var buttonContainer = document.createElement( 'div' );
    
    buttonContainer.setAttribute("id", "reactButtonContainer");
    // reactContainer.onclick      = function(){alert("This works!!!")};

    var cloudSVGDiv       = document.createElement('div');
    cloudSVGDiv.innerHTML = cloudSVG;
    cloudSVGDiv.setAttribute('id',"cloudSVG")

    var reactButtonDiv       = document.createElement('div');
    reactButtonDiv.innerHTML = reactButtonSVG;
    reactButtonDiv.setAttribute('id',"reactButtonSVG")

    var settingsDiv       = document.createElement('div');
    settingsDiv.innerHTML = settingsSVG;
    settingsDiv.setAttribute('id',"settingsSVG") 
    
    buttonContainer.append(reactButtonDiv);
    buttonContainer.append(cloudSVGDiv);
    buttonContainer.append(settingsDiv)

    return buttonContainer;
}

    
    // //set user-specified attributers
    // console.log("Size right here is "+size);
    // reactButton.style.width  = size + "rem";
    // reactButton.style.height = size + "rem";
    // reactButton.style.left   = x + "%";
    // reactButton.style.bottom = y + "%";
    
    // //add wrapper that holds the svg logo itself
    // var logoWrapper = document.createElement( 'div' );
    // logoWrapper.setAttribute('id',"logoWrapper");
    // logoWrapper.innerHTML    = cloudWithEmoji;
    // reactButton.append(logoWrapper);


// function makeReacts
// purpose: 
//          make the react container and the reacts held within it,
//          as well as any other buttons or functionality for the
//          container.
// arguments:
//          align : "left" or "right" - a user preference that allows users
//                  to describe the direction that the react container
//                  should open in
//          size  : integers that describes the scaling of the original button
//                  (in rems) -> the reacts themselves will be scaled
//                  proportionally
//           x,y  : integers - a user preference that describes how far to
//                  the right (x) and how far down up from the bottom (y) 
//                  their emotion tool appears on each page
//      emoticons : an array of emotion unicode strings corresponding to
//                  emotions that will be rendered on button click
//      rows, cols: integers - user preference that describes the numebr of
//                  rows and columns that their array of emotions has
// function makeReacts(align, size, x, y, emoticons, rows, cols)
// {
//     // make container to hold reactions
//     var reactContainer = document.createElement( 'div' );
//     reactContainer.setAttribute("id", "reactContainer");
//     reactContainer.style.bottom = x+"%";
//     reactContainer.style.left   = y+"%";

//     reactContainer.style.setProperty('--grid-rows', rows);
//     reactContainer.style.setProperty('--grid-cols', cols);

//     for (emote in emoticons) {
//         let react = document.createElement("div");
//         react.innerHTML = htmlify(emoticons[emote])
//         react.setAttribute("id", emoticons[emote]);
//         react.style.fontSize = (size / 3) + "rem";
//         react.onclick = function(e){ handleReact(e.target.getAttribute("id")); };
//         reactContainer.appendChild(react).className = "grid-item reactText"
//     }
//     return reactContainer;
// }

// funciton makeSelectedReact
// purpose: create the div that will hold the selected reaction
// arguments:
//          size  : integers that describes the scaling of the original button
//                  (in rems) -> the reacts themselves will be scaled
//                  proportionally
//           x,y  : integers - a user preference that describes how far to
//                  the right (x) and how far down up from the bottom (y) 
//                  their emotion tool appears on each page
// function makeSelectedReact(size)
// {
//     selectedReact = document.createElement("div");
//     selectedReact.setAttribute("id","selectedReact");

//     //dynamically set react and text size
//     selectedReact.style.fontSize = ((3/10)*size)+'rem';
//     selectedReact.style.height   = ((3/5) *size)+'rem';
//     selectedReact.style.width    = ((3/5) *size)+'rem';

//     return selectedReact;
// }


//-------------------FUNCTIONALITY------------------

// function getUserReact
// purpose: check if a user has already reacted to a page,
//          and if they have, reflect it in the DOM
// parameters: url, userid
// returns: nothing (should call the appropriate rendering function)
function getUserReact(url, userid) {

    //send request
    var data = {
        userid: userid,
        url:    url
    };
    //  TODO make the readystates and statuses actually work
    console.log("Sending request with userid "+userid+" and url "+url);
    var req = new XMLHttpRequest();
    req.open("POST","https://cloudsurf.herokuapp.com/getUserReact", true);
    req.setRequestHeader("Content-type","application/json");
    req.onload = function (e) {
        console.log("Request loaded.")
        console.log(req.responseText);
        response = JSON.parse(req.responseText);  
        if(response["reaction"] != "None") {
            setSelectedReact(response["reaction"])
        }
        if (req.readystate === 4) {
            console.log("Ready state is 4.")
            if (req.status === 200) {
                console.log("Request is returned.")
                console.log(req.responseText)
                 
                set              
                if (!Object.keys(response).includes("response")){
                    makeEmojis(JSON.parse(xhr.response), div);                               
                }
            }
            else{
                console.error(req.statusText)
            }
        }
    }
    req.onerror = function (e) {
        console.error(req.statusText)
    };
    req.send(JSON.stringify(data))
}


//-------------------opening/closing react tool-----
// openReacts
// purpose: allow user to react to the page
function openReacts()
{
    listenForClose();
    document.getElementById("reactButton").style.display    = "none";
    document.getElementById("reactContainer").style.display = "grid";
}

//handle the reaction made by the user
function handleReact(reactType) 
{
    // send reaction request to backend
    var data = {
        emotion: reactType,
        url:     window.location.href,
        userid:  userid
    };
    console.log("data: ", data)
    var req = new XMLHttpRequest();
    req.open("POST","https://cloudsurf.herokuapp.com/react", true);
    req.setRequestHeader("Content-type","application/json");
    req.onload = function (e) {
        if (req.readystate === 4) {
            if (req.status === 200) {
                console.log(req.responseText)
            }
            else{
                console.error(req.statusText)
            }
        }
    }
    req.onerror = function (e) {
        console.error(req.statusText)
    };
    req.send(JSON.stringify(data))
    closeReacts(reactType)
}

// setSelectedReact
// purpose: update the DOM with a selected reaction -> may be called on initial render if user has already
//          reacted to a page, and will be called whenever a user actually reacts or changes reaction
//
// arguments: 
//          reactType: unicode for the selected reaction
// returns:
//          nothing
function setSelectedReact(reactType) 
{
    document.getElementById("selectedReact").innerHTML = htmlify(reactType);
}  
// close the set of reactions
// replace smaller button with selected reaction, if applicable
function closeReacts(reactType) {
    
    stopListening();
    if (reactType != "no-select") {
        setSelectedReact(reactType);
        //TODO this isn't a good long term solution, we need a wrapper div just for the svg
        document.getElementById("logoWrapper").innerHTML = cloudNoEmoji;
    }
    
    // hide the react container
    document.getElementById("reactContainer").style.display = "none";
    
    //show the react button with the new background
    document.getElementById("reactButton").style.display = "flex";

}


//----------------CLOSE ON CLICK---------------

// clickCheck
// purpose: handle clicks outside of reaction div when reactions are open
// parameters: 
//          e: the event object, which is passed automatically as this
//             function is attached to an event listener
// returns:
//          nothing, calls the appropriate function if the click turns out
//                      to be from outside
var clickCheck = function(e) {
    // TODO figure out what this line does
    e = e || window.event;
    
    var target = e.target;

    // here, we iterate until we get to the react button, the react container,
    //  or the rest of the document body
    while (target.getAttribute("id") != "reactContainer" &&  
           target.getAttribute("id") != "reactButton"    && 
           target.parentElement != null) {
        console.log(target.getAttribute("id"));
        target = target.parentElement;
    }
    // if, after iterating out, we aren't targeting the containers of interest,
    //      close the reacts
    if(target.getAttribute("id") != "reactContainer" && target.getAttribute("id") != "reactButton"){
        closeReacts("no-select")
    }   
}
// listenForClose
// purpose: 
//      this attaches the clickCheck function to any click events on the body
// parameters:
//      none
// returns:
//      nothing
function listenForClose(){
    document.addEventListener('click', clickCheck, false);
}
// stopListening
// purpose:
//     this removes the clickCheck function from any click events on the 
//      document body
// parameters:
//     none
// returns:
//     nothing
function stopListening(){
    document.removeEventListener('click', clickCheck);
}



//-------------------MISCELLANEOUS

//  this function is not completely implemented TODO
//  it's for sites like YOUTUBE, where clicking links doesn't refresh the
//  content script everytime
//Listener for content script url change message, need to refresh emotion get
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.url)
        //get new emotion information
        console.log(request.url)
        sendResponse({farewell: "goodbye"});
    }
);



// get unicodes ready for display in html
function htmlify(reactType){
    return "&#" + reactType + ";"
}