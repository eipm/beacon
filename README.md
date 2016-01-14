# Beacon
Dockerized version of a GA4GH Beacon implementation

#### Instructions

##### To run a sample beacon
```
docker run -d --name beacon -p 8080:80 dtr.weill.cornell.edu/ipm/beacon
```

##### To run a beacon with your data
```
docker run -d --name beacon -v /my/database/path/beaconData.GRCh37.sqlite:/var/www/html/beacon/ucscBeacon/beaconData.GRCh37.sqlite -v /my/beacon/conf/beacon.conf:/var/www/html/beacon/beacon.conf -p 8080:80 dtr.weill.cornell.edu/ipm/beacon
```