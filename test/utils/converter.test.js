import Test from 'ava';
import * as Formatter from '../../src/utils/converter';

Test('formats to NonNullable proper CS Type', async t => {

  // NonNullable Types
  t.is(Formatter.toCSType('bigint'), 'long');
  t.is(Formatter.toCSType('float'), 'double');

  t.is(Formatter.toCSType('money'), 'decimal');
  t.is(Formatter.toCSType('decimal'), 'decimal');

  t.is(Formatter.toCSType('bit'), 'bool');

  t.is(Formatter.toCSType('int'), 'int');
  t.is(Formatter.toCSType('int32'), 'int');

  t.is(Formatter.toCSType('uniqueidentifier'), 'Guid');

  t.is(Formatter.toCSType('nvarchar'), 'string');
  t.is(Formatter.toCSType('varchar'), 'string');
  t.is(Formatter.toCSType('varchar(max)'), 'string');
  t.is(Formatter.toCSType('nvarchar(max)'), 'string');
  t.is(Formatter.toCSType('nchar'), 'string');
  t.is(Formatter.toCSType('char'), 'string');
  t.is(Formatter.toCSType('string'), 'string');

  t.is(Formatter.toCSType('date'), 'DateTime');
  t.is(Formatter.toCSType('datetime'), 'DateTime');
  t.is(Formatter.toCSType('datetime2'), 'DateTime');
  t.is(Formatter.toCSType('smalldatetime'), 'DateTime');

  t.is(Formatter.toCSType('varbinary'), 'byte[]');
  t.is(Formatter.toCSType('varbinary(max)'), 'byte[]');
  t.is(Formatter.toCSType('timestamp'), 'byte[]');
  t.is(Formatter.toCSType('byte[]'), 'byte[]');
});

Test('formats to Nullable CS Type', async t => {

  t.is(Formatter.toCSType('bigint', true), 'long?');
  t.is(Formatter.toCSType('float', true), 'double?');

  t.is(Formatter.toCSType('money', true), 'decimal?');
  t.is(Formatter.toCSType('decimal', true), 'decimal?');

  t.is(Formatter.toCSType('bit', true), 'bool?');

  t.is(Formatter.toCSType('int', true), 'int?');
  t.is(Formatter.toCSType('int32', true), 'int?');

  t.is(Formatter.toCSType('uniqueidentifier', true), 'Guid?');

  t.is(Formatter.toCSType('date', true), 'DateTime?');
  t.is(Formatter.toCSType('datetime', true), 'DateTime?');
  t.is(Formatter.toCSType('datetime2', true), 'DateTime?');
  t.is(Formatter.toCSType('smalldatetime', true), 'DateTime?');
});
