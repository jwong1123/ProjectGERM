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
	const [video] = videos.filter((xxx) => {
		return xxx.id === id;
	});
	resolve(video);
});

const getVideos = () => new Promise((resolve) => resolve(videos));
const createVideo = ({title, duration, release}) => {
	const video = {
		id: (new Buffer(title, 'utf8')).toString('base64'),
		title,
		duration,
		release
	};
	videos.push(video);
	return video;
};

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;