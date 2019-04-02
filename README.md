# Beacon

[![Docker Automated build](https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg)](https://hub.docker.com/r/eipm/beacon/) [![Docker Pulls](https://img.shields.io/docker/pulls/eipm/beacon.svg)](https://hub.docker.com/r/eipm/beacon/) [![Docker Stars](https://img.shields.io/docker/stars/eipm/beacon.svg)](https://hub.docker.com/r/eipm/beacon/)
[![Maintainability](https://api.codeclimate.com/v1/badges/b3607af6a3051d8df2eb/maintainability)](https://codeclimate.com/github/eipm/beacon/maintainability)
[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

## Supported tags and respective `Dockerfile` links

- [`latest` (*latest/Dockerfile*)](https://github.com/eipm/beacon/blob/master/Dockerfile)
- [`1.0.0` (*1.0.0/Dockerfile*)](https://github.com/eipm/beacon/blob/1d12dba679b013b8f4a679f492d8f29906b7d678/Dockerfile)

## Introduction

This project is an open source dockerized automated build implementation of the GA4GH Beacon, enabling researchers to light their own beacon with a single command line.

- [Github Project](https://github.com/eipm/beacon)
- [Docker Automated Build](https://hub.docker.com/r/eipm/beacon/)

## About Beacon

The Beacon Project is a simple, open web service that balances the desire of international sites to share genomic data with the need for data protection. Beacons can be implemented by any institution and enable users to determine whether a database contains a genetic variant of interest. Queries such as, "Do you have any genomes with an 'A' at position 100,735 on chromosome 3" (or similar data) are met with either "Yes" or "No.” The Beacon Network — the collection of all organizations that have “lit" beacons — can be queried using the Beacon API or a web-based search engine to determine which, if any, sites have a variant of interest.

### Beacon Resources

- [Beacon Project Home Page](http://ga4gh.org/#/beacon)
- [Beacon on Github](https://github.com/maximilianh/ucscBeacon)

## About Docker

Docker is an open-source project that automates the deployment of applications inside software containers, by providing an additional layer of abstraction and automation of operating-system-level virtualization on Linux. Docker uses the resource isolation features of the Linux kernel such as cgroups and kernel namespaces, and a union-capable filesystem such as aufs and others to allow independent "containers" to run within a single Linux instance, avoiding the overhead of starting and maintaining virtual machines.

### Docker Resources

- [Docker Home Page](https://www.docker.com)
- [Docker Run Reference](https://docs.docker.com/engine/reference/run/)

## Launch a test Beacon

1. [Install Docker](https://www.docker.com)
2. Launch Docker Quickstart terminal and type:

```bash
docker run -d --name "beacon" \
--restart=always \
-p 8080:80 \
eipm/beacon
```

3. Browse to ```http:// 0.0.0.0:8080/beacon``` on a modern web browser.

## Creating your own configuration file

Create your own beacon.conf file using [this template](https://github.com/eipm/beacon/blob/master/config/beacon.conf).

## Adding your own data and configuration file

### 1. Run a beacon with your own SQLite DB and configuration file.

```bash
docker run -d --name "beacon" \
--restart=always \
-p 8080:80 \
-v my/database/path/beaconData.GRCh37.sqlite:/var/www/html/beacon/ucscBeacon/beaconData.GRCh37.sqlite \
-v /my/beacon/conf/beacon.conf:/var/www/html/beacon/beacon.conf \
eipm/beacon
```

### 2. Run a beacon in interactive mode and import your own data and configuration file.

#### A. Launch Beacon with your data

```bash
docker run -it --name beacon \
-v my/data/:/data \
-v /my/beacon/conf/beacon.conf:/var/www/html/beacon/beacon.conf \
-p 8080:80 eipm/beacon /bin/bash
```

#### B. Run the import dataset command for dataset 'ipm'

```bash
cd /var/www/html/beacon/ucscBeacon/; ./query GRCh37 ipm /data/*;
```

### [Learn more about supported data formats](https://github.com/maximilianh/ucscBeacon#adding-your-own-data)