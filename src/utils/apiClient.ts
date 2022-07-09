import axios from 'axios';

export const apiClient = axios.create({
	baseURL: '',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH,PUT,OPTIONS',
	},
});