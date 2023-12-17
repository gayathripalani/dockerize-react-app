/** @jest-environment jsdom */
import { describe, expect } from '@jest/globals';
import { screen, render, cleanup } from '@testing-library/react'
import Header from '../components/common/Header';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';


describe('Header testcases', () => {
    afterEach(cleanup);

    it('Header should render with text', async () => {
        render(
            <I18nextProvider i18n={i18n}>
              <Header />
            </I18nextProvider>
          );
        expect(screen.getByText("React")).toBeTruthy()

    });
});

