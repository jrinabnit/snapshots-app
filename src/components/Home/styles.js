import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	googleButton: {
		marginBottom: theme.spacing(2),
	},
	[theme.breakpoints.down('sm')]: {
		mainContainer: {
			flexDirection: 'column-reverse',
		},
	},
}));

// import { makeStyles } from '@material-ui/core';

// export default makeStyles((theme) => ({
// 	appBar: {
// 		borderRadius: 15,
// 		margin: '30px 0',
// 		display: 'flex',
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	heading: {
// 		color: 'rgba(0,183,255, 1)',
// 		fontFamily: '',
// 	},
// 	image: {
// 		marginLeft: '15px',
// 	},
// 	[theme.breakpoints.down('sm')]: {
// 		mainContainer: {
// 			flexDirection: 'column-reverse',
// 		},
// 	},
// }));
