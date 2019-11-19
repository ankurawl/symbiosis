import json
import boto3
from io import BytesIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    #for bucket in s3.buckets.all():
    #    print(bucket.name)
    portfolio_bucket = s3.Bucket('portfolio.elkong.com')
    build_bucket = s3.Bucket('portfoliobuild.elkong.com')

    portfolio_buildzip_rawdata = BytesIO()
    build_bucket.download_fileobj('portfoliobuild.zip',portfolio_buildzip_rawdata)
    myzip = zipfile.ZipFile(portfolio_buildzip_rawdata)

    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
