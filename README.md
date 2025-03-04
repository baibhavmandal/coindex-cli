# Coindex CLI

coindex-cli is a command-line tool that helps you get the current prices of cryptocurrencies using the [CoinAPI APIs](https://coinapi.io). This CLI tool is built using Node.js, axios, commander, enquirer, configstore, and colors.

## Features

- View the price of any cryptocurrency (e.g., BTC) in your chosen currency (e.g., USD).
- Easy setup and configuration.
- Simple commands to set, show, and remove API keys.
- Customizable commands to check cryptocurrency prices.

## Installation

To install coindex-cli, follow these steps:

1. Clone the repository:

```
git clone https://github.com/yourusername/coindex-cli.git

```

2. Navigate to the project directory:

```
cd coindex-cli
```

3. Install the dependencies:

```
npm install
```

4. Link the CLI tool:

```
npm link

```

## Usage

### Primary Commands

- coindex key [options]: Set, show, or remove your API key.

  - Options:
    - --set: Set your API key.
    - --show: Show your API key.
    - --remove: Remove your API key.

- coindex check [option]: Check cryptocurrency prices.

  - Option:
    - price: Check the price of a cryptocurrency.
    - Usage: coindex check price --coin <type> --cur <type>
    - Default: Coin is BTC and currency is USD.

### Examples

1. Set your API key:

```
coindex key --set
```

2. Show your API key:

```
coindex key --show
```

3. Remove your API key:

```
coindex key --remove
```

4. Check the price of BTC in USD:

```
coindex check price
```

5. Check the price of ETH in EUR:

```
coindex check price --coin ETH --cur EUR
```

## Configuration

To use coindex-cli, you need a free API key from [CoinAPI](https://coinapi.io). Set your API key using the `coindex key --set` command.

## Major Dependencies

- Node.js
- axios
- commander
- enquirer
- configstore
- colors

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Contact

For support or inquiries, please contact my [email](baibhavmandal12@gmail.com).
