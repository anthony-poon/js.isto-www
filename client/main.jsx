import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import App from '/imports/ui/App'
import Hello from "../imports/ui/Hello";

FlowRouter.route('/', {
    action: function(params) {
        mount(App, {
            main: <Hello/>
        })
    }
});