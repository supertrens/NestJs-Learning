import { readFile, writeFile } from 'fs/promises';

const FILE_NAME = 'messages.json';

export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.parseMessages();
    return messages[id];
  }

  async findAll() {
    const messages = await this.parseMessages();
    return messages;
  }

  async create(content: string) {
    const messages = await this.parseMessages();
    const id = Math.floor(Math.random() * 999);

    const newMessage = {
      id,
      content,
    };

    messages[id] = newMessage;

    await writeFile(FILE_NAME, JSON.stringify(messages));

    return messages[id];
  }

  parseMessages = async () => {
    const contents = await readFile(FILE_NAME, 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  };
}
