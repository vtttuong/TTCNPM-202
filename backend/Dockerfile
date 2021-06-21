# pull official base image
FROM python:3.8.3-alpine

# set work directory
WORKDIR /srv/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN apk add --no-cache jpeg-dev zlib-dev
RUN apk add --no-cache --virtual .build-deps build-base linux-headers \
    && pip install Pillow
RUN apk add --update --no-cache postgresql-client
# install temp dependencies for build of pyscopg2 etc
RUN apk add --update --no-cache --virtual .tmp-build-deps \
  gcc \
  libc-dev \
  linux-headers \
  postgresql-dev \
  musl-dev \
  zlib zlib-dev \
  && pip install -r requirements.txt \
  && apk del --no-cache .tmp-build-deps

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN chmod 777 entrypoint.sh 
RUN pip install apyori
RUN pip install requests



# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/bin/sh","/srv/app/entrypoint.sh"]

#RUN python listorder.py
