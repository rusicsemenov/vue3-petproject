import { describe, expect, it } from 'vitest';
import App from '../App.vue';
import { setupTestApp } from './test-utils';

describe('App', () => {
    it('mounts renders properly', async () => {
        const wrapper = await setupTestApp(App, '/');
        expect(wrapper.text()).toContain('Welcome to the demo site!');
    });
});
