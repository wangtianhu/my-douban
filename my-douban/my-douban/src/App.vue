<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 @charset "utf-8";

/* 这个css是初始化的css，在任何手机项目里面都可以使用 */

/* 禁用iPhone中Safari的字号自动调整 */
html {
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	/* 解决IOS默认滑动很卡的情况 */
	-webkit-overflow-scrolling : touch; 
}

/* 图片自适应 */
img {
	width: 100%;
	height: auto;
	width: auto\9;
 /* ie8 */
	display: block;
	-ms-interpolation-mode: bicubic;
/*为了照顾ie图片缩放失真*/
}

/* 初始化 */
body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form, table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, menu, nav, section {
	margin: 0;
	padding: 0;
}
a{ 
text-decoration:none;
 }
body {
	font: 12px/1.5 'Microsoft YaHei','宋体', Tahoma, Arial, sans-serif;
	color: #555;
	background-color: #ffffff;
}

ul,li,ol {
	list-style-type: none;
}

.clearfix:after {
	content: "";
	display: block;
	visibility: hidden;
	height: 0;
	clear: both;
}

.clearfix {
	zoom: 1;
}

h1, h2, h3, h4, h5, h6 {
	font-size: 100%;
	font-family: 'Microsoft YaHei';
}

img {
	border: none;
}
</style>
