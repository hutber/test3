export default function (data){
	return `
			<div class="shareBox">
				<img src="${data.image}" alt="${data.username}">
				<h3>${data.title}</h3>
				<div class="shareBox__author">by ${data.username}</div>
				<div class="shareBox__likes"><span></span>${data.likes.length} Likes</div>
			</div>		
	`;
}
