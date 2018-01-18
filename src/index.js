import shareBox from './templates/shareBox';
import './styles.css';

class Kano {
	constructor() {
		this.state = {};
	}

	getShares() {
		const url = 'http://api.kano.me/share?limit=100';
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(response => resolve(response.json()))
				.catch(error => reject(error))
		})
	}

	populateShares(){
		return this.getShares()
			.then((data) => {
				this.state.share = data.entries.map((item) => {
					return shareBox({
						image: item.cover_url,
						title: item.title,
						likes: item.likes,
						username: item.user.username,
					});
				});
				this.displayShares();
			});
	}

	displayShares(){
		const share = document.querySelector('.share');
		share.classList.add('displayingShares');
		share.classList.remove('share__loading');
		share.innerHTML = this.state.share.reduce((acc, curr) => acc+curr);
	}

	render() {
		this.populateShares();
	}

}

const kanoShares = new Kano();
kanoShares.render();
