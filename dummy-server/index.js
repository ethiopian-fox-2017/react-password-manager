import jsf from 'json-schema-faker'

const schema = {
  type: 'array',
  minItems: 5,
  maxItems: 5,
  items: {
    user: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        username: {
          type: 'string'
        },
        password: {
          type: 'string',
          minLength: 5,
          maxLength: 8
        },
        url: {

        }
      },
      required: ['id','username','password','url']
    }
  }
}