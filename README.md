SinchCLI
========

Sinch CLI for interacting with our APIs

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/SinchCLI.svg)](https://npmjs.org/package/SinchCLI)
[![Downloads/week](https://img.shields.io/npm/dw/SinchCLI.svg)](https://npmjs.org/package/SinchCLI)
[![License](https://img.shields.io/npm/l/SinchCLI.svg)](https://github.com/spacedsweden/SinchCLI/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sinchcli
$ sinch COMMAND
running command...
$ sinch (-v|--version|version)
sinchcli/0.4.0 win32-x64 node-v10.15.0
$ sinch --help [COMMAND]
USAGE
  $ sinch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sinch SendVerification`](#sinch-sendverification)
* [`sinch hello [FILE]`](#sinch-hello-file)
* [`sinch help [COMMAND]`](#sinch-help-command)

## `sinch SendVerification`

Send an SMS verification

```
USAGE
  $ sinch SendVerification

OPTIONS
  -f, --force
  -h, --help                     show CLI help
  -p, --phoneNumber=phoneNumber  phonenumber to send a verification to
  --version                      show CLI version

EXAMPLE
  $ sinch sendSMSVerification
  creates a sms verification
```

_See code: [src\commands\SendVerification.ts](https://github.com/spacedsweden/SinchCLI/blob/v0.4.0/src\commands\SendVerification.ts)_

## `sinch hello [FILE]`

describe the command here

```
USAGE
  $ sinch hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sinch hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/spacedsweden/SinchCLI/blob/v0.4.0/src\commands\hello.ts)_

## `sinch help [COMMAND]`

display help for sinch

```
USAGE
  $ sinch help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src\commands\help.ts)_
<!-- commandsstop -->
