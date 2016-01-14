# Dockerfile for Beacon
FROM python:2.7
MAINTAINER Alexandros Sigaras <als2076@med.cornell.edu>

# Setup Apache
RUN apt-get update; apt-get -y install apache2 git; a2enmod cgi; service apache2 restart

# Download Beacon
RUN cd /var/www/html; mkdir beacon; cd beacon; git clone https://github.com/maximilianh/ucscBeacon.git; cd ucscBeacon/; sed -i "s/'server.socket_port': port/'server.socket_port': port, 'server.socket_host': '0.0.0.0'/g" query

# Config Beacon
RUN echo "ServerName localhost" | tee /etc/apache2/conf-available/fqdn.conf; a2enconf fqdn
ADD config/beacon.conf /var/www/html/beacon/beacon.conf
ADD config/apache2.conf /etc/apache2/apache2.conf
ADD app /var/www/html/beacon/

# Startup
CMD /usr/sbin/apache2ctl -D FOREGROUND