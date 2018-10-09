#!/usr/bin/perl -w
use warnings;
use strict;

use MongoDB;
use Cpanel::JSON::XS qw(encode_json decode_json);
use LWP::UserAgent ();
use Data::Dumper;
use boolean;

my $fileName = "data.dat";

open FILE, $fileName or die $!;

my $client = MongoDB->connect();
my $db = $client->get_database('phenotype');
my $genes = $db->get_collection( 'genes' );
my $contents;

while(<FILE>) {
	my $ua = LWP::UserAgent->new;
	my $mim = $_;
	chomp $mim;
	#print $mim;
	my $server_endpoint = "http://api.omim.org/api/geneMap?mimNumber=$mim&phenotypeExists=true&apiKey=uJRlVDQiQoq3_dh7KgDMQw&format=json";
	#print $server_endpoint;
	my $response = $ua->get($server_endpoint);
	$contents = $response->decoded_content;
	
	my $omimObject = decode_json $contents;
	my @geneMapList = @{$omimObject->{omim}->{listResponse}->{geneMapList}};

	if(@geneMapList) {
		my $hasPhenotype = false;
		my $geneMap = $geneMapList[0];
		if ($geneMap->{geneMap}->{phenotypeMapList}) {
			$hasPhenotype = true;
		}
		#print Dumper $response->decoded_content;
		$genes->update_one({_id => $mim}, { '$set' => {
			_id => $mim,
			hasPhenotype => $hasPhenotype,
			contents => $contents
  		}}, {'upsert' => 1});
	} 
}



