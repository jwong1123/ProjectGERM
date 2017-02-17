const videoA = {
	id:  '1',
	title:  'foo',
	duration: 100,
	watched:  true
};

const videoB = {
	id: 'cc',
	title: 'bar',
	duration:  200,
	watched:  false
};

const videos = [videoA, videoB];
const getVideoById = (id) => new Promise((resolve) => {
	console.log(videos);
	const [video] = videos.filter((xxx) => {
		console.log(xxx.id, id);
		return xxx.id === id;
	});
	resolve(video);
});

const getVideos = () => new Promise((resolve) => resolve(videos));

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;