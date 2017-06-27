/**
 *Converts to a CS Type
 *
 * @public
 *
 * @param {string} type
 * @param {boolean} isNullable
 *
 * @returns {string}
 */
export const toCSType = (type, isNullable = false) => {
  const suffix = isNullable ? `?` : ``;

  switch (type.toLowerCase()) {
    case 'bigint':
      return `long${suffix}`;

    case 'float':
      return `double${suffix}`;
    case 'money':
    case 'decimal':
      return `decimal${suffix}`;
    case 'bit':
      return `bool${suffix}`;

    case 'int':
    case 'int32':
      return `int${suffix}`;
    case 'uniqueidentifier':
      return `Guid${suffix}`;
    case 'nvarchar':
    case 'varchar':
    case 'varchar(max)':
    case 'nvarchar(max)':
    case 'nchar':
    case 'char':
    case 'string':
      return 'string';
    case 'date':
    case 'datetime':
    case 'datetime2':
    case 'smalldatetime':
      return `DateTime${suffix}`;
    case 'varbinary':
    case 'varbinary(max)':
    case 'timestamp':
    case 'byte[]':
      return `byte[]`;
  }

  return type;
};

/**
 *
 * Converts to a SQL DB Type
 *
 * @public
 *
 * @param {string} type
 *
 * @returns {string}
 */
export const toSqlDbType = type => {
  switch (type.toLowerCase()) {
    case 'bigint':
    case 'long':
      return 'BigInt';
    case 'int':
      return 'Int';
    case 'bit':
      return 'Bit';
    case 'money':
      return 'Money';
    case 'decimal':
      return 'Decimal';
    case 'uniqueidentifier':
      return 'UniqueIdentifier';
    case 'nvarchar':
    case 'nvarchar(max)':
      return 'NVarChar';
    case 'varchar':
    case 'varchar(max)':
      return 'VarChar';
    case 'nchar':
      return 'NChar';
    case 'char':
      return 'Char';
    case 'datetime':
      return 'DateTime';
    case 'datetime2':
      return 'DateTime2';
    case 'timestamp':
      return 'Timestamp';
    case 'date':
      return 'Date';
    case 'smalldatetime':
      return 'SmallDateTime';
    case 'varbinary':
    case 'varbinary(max)':
      return 'VarBinary';
    case 'float':
      return 'Float';
  }

  return type;
};


