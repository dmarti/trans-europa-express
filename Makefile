TRACKERLIST=https://raw.githubusercontent.com/disconnectme/disconnect-tracking-protection/master/services.json

europe.pac : services.json
	./list-convert.py $< > $@

services.json :
	wget -O $@ -q ${TRACKERLIST}

clean :
	rm -f services.json europe.pac

.PHONY : clean
