'use strict';
const { Markup } = require('telegraf');
const { homepage } = require('../../package.json');

const message = `\
Hey there!

I'm an <b>administration</b> bot that helps you to keep \
your <b>groups</b> safe from <b>spammers.</b>

Send /commands to get the list of available commands.
`;

const helpHandler = ({ chat, replyWithHTML }) => {
	if (chat.type !== 'private') return null;

	return replyWithHTML(
		message,
		Markup.inlineKeyboard([
			Markup.urlButton('🛠 UzHackintosh Main Group', homepage)
		]).extra()
	);
};

module.exports = helpHandler;
