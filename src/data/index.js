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

const videoC = {
	id: 'xx',
	title: 'Lorem',
	duration:  300,
	watched:  true
};

const videoD = {
	id: 'dklf',
	title: 'Ipsum',
	duration:  200,
	watched:  false
};

const videoE = {
	id: 'asdw',
	title: 'Dolor',
	duration:  400,
	watched:  true
};

const videos = [videoA, videoB, videoC, videoD, videoE];
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

const getObjectById = (type, id) => {
	const types = {
		video: getVideoById
	};
	return types[type](id);
}

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;
exports.getObjectById = getObjectById;