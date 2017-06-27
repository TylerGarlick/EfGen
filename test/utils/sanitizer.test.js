import Test from 'ava';
import * as Sanitizer from '../../src/utils/sanitizer';

Test('column name formats correctly', async t => {
  const result = await Sanitizer.column('blah');
  t.truthy(result);
  t.deepEqual(result, 'blah');
});
