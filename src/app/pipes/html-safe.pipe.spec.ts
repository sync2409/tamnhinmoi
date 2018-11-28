import { HtmlSafePipe } from './html-safe.pipe';

describe('HtmlSafePipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlSafePipe();
    expect(pipe).toBeTruthy();
  });
});
