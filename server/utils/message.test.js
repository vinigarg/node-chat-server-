const expect = require('expect');
const {generateMessage,generateLocationMessage} = require('./message');

describe('Generate Message',() => {
  it('Should Generate the Correct Message Object',() => {
    var from = 'Jayant';
    var text = "Some Message";
    var message = generateMessage(from,text);
    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({
      from,
      text,
    });

  });
});

describe('generateLocationMessage' ,() => {
  it('Should generate correct location object',() => {
    var from = 'Jay';
    var latitude = 15;
    var longitude = 19;
    var url = `https://www.google.com/maps?q=15,19`;
    var message = generateLocationMessage(from,latitude,longitude);
    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({
      from,
      url,
    });
  });
});
