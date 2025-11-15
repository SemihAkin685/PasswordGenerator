# PasswordGenerator

PasswordGenerator is a simple and flexible JavaScript module for generating secure passwords with customizable character sets. It can be used both in your projects and directly from the CLI.

> [!IMPORTANT]
> This project is still developing and it may has bugs.
> You can make an issue or send pull request if you wan't something to fix.

## Features
- Customizable character sets
- Generate multiple passwords at once
- CLI support
- ES Module compatible
- Default sets: lowerCase, upperCase, figure, symbols

## Usage

### Basic Example:
js
import PasswordGenerator from './PasswordGenerator.js';

const gen = new PasswordGenerator(16, ['lowerCase', 'upperCase', 'figure']);
console.log(gen.generate());
## API

### new PasswordGenerator(length, sets)

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
length    | Number | 20    | Password length
sets      | Array<String> | ['lowerCase','upperCase','figure','symbols'] | Character sets to include

Supported character sets:
- lowerCase (a-z)
- upperCase (A-Z)
- figure (0-9)
- symbols (!@#$%^&*()_+[]{}<>?)

## Terminal Examples

### Generate a 20-character password:
node index.js --len=20

### Use specific character sets:
node index.js --len=24 --sets=lowerCase,upperCase

### Generate multiple passwords:
node index.js --len=32 --count=5

## Example Output
Qk9!frA3pzL#2vTn@xWc
