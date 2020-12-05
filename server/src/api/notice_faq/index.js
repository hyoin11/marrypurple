import Router from 'koa-router';
import * as faqCtrl from './faq.ctrl';

const faq = new Router();
faq.get('/', faqCtrl.list);
faq.post('/', faqCtrl.write);

faq.get('/:faq_id', faqCtrl.read);
faq.delete('/:faq_id', faqCtrl.remove);
faq.patch('/:faq_id', faqCtrl.update);

export default faq;