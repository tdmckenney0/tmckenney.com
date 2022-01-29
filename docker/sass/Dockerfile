FROM ruby:latest

RUN gem install sass

WORKDIR /tmp
ENTRYPOINT ["sass", "--watch", "/src/sass:/src/css"]
