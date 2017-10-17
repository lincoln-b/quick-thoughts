Quick Thoughts
==============

Repository is live at http://lincoln-b.com/thoughts. Feel free to use for your own purposes, be that a school project, at work, or for your own personal use, whenever you need to throw together a really quick chat room. Using it is totally anonymous and unmoderated/limited in any way. There is no persistent storage whatsoever of any messages sent.

Usage
=====

git clone ... && cd ...
php server/bin/chat-server.php
# fire up a server of some kind for index.html
# Voila!

How it works
============

Basically, its a simple proof-of-concept chat application using WebSockets. Feel free to copy/fork/do whatever with it.

The server was made by following this tutorial: http://socketo.me/docs/hello-world

I wrote the JavaScript code, which is very simple -- opens a websocket, and handles basic message passing.

The CSS was taken from http://chad.is/css3-buttons/ and https://codepen.io/ayoungh/pen/ABJKu, plus some of my own making.
