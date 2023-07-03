// [rewrite_local]  
// # ～ Bilibili大会员（2022-12-05）@ddgksf2013
// ^http[s]?:\/\/((app|api)\。(\w{2,15})?\。(com|cn))。*player\。(v3|v2|v1)。Play(URL|View)。*$ url script-request-header BilibiliProCrack。js
// [mitm] 
// hostname=app。bilibili。com, grpc。biliapi。net,*。biliapi。net,app。bilibili。com,api。bilibili。com,api。live。bilibili。com,api。vc。bilibili。com,dataflow。biliapi。com,124。239。240。*,101。89。57。66, 218。94。210。66,240e:b1:9801:206:11:0:0:*

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '_uuid=FD40FA45-78E5-B4BA-0E16-DDC66FEBA9A503478infoc; buvid3=31C0CF16-F604-49A7-A4A6-97AB6E70900236715infoc; buvid4=B3CFD40A-DA86-7AD0-ABEE-CF86C054839E03649-123070308-bK5ysmawZ6WuKUM2vI2CLg%3D%3D; Buvid=YC404ACC89F3A7474D9BA624A40C96B1D3C6; sid=ourmj9jh; SESSDATA=2be9f337%2C1703897446%2C9a69c072PSpJob_MzO-bj0WL2QFDnIN_kFch0h7Pm5eHNIQ30CQc6eAW8M7CfIx5Z0VCpGKng8qHggAAFAA; bili_jct=2a1269d3d77809b0298d0257fe417d05; DedeUserID=291204920; DedeUserID__ckMd5=9579e491512bd237';
modifiedHeaders['x-bili-device-bin'] = 'CAEQyJmMIxokWUM0MDRBQ0M4OUYzQTc0NzREOUJBNjI0QTQwQzk2QjFEM0M2IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoRaVBob25lIDE0IFBybyBNYXhSBjE2LjUuMWoGNy4zNi4wckBBRkM2NkMyQzc5NjhDQzRBOEFCMDI1NjlFNjk1NDJGQzIwMjMwNjEyMTQ1MzMzOEZGRTUzNENERTU2ODJEQjM3eJDfodeJMQ==';
modifiedHeaders['Authorization'] = 'identify_v1 c61e4740975758ea4ccd28ae6105ff72PSpJob_MzO-bj0WL2QFDnIN_kFch0h7Pm5eHNIQ30CQc6eAW8M7CfIx5Z0VCpGKng8qHggAAFAA';
modifiedHeaders['User-Agent'] = 'bili-universal/73600200 os/ios model/iPhone 14 Pro Max mobi_app/iphone osVer/16。5。1 network/2';
modifiedHeaders['buvid'] = 'YC404ACC89F3A7474D9BA624A40C96B1D3C6';
modifiedHeaders['x-bili-metadata-bin'] = 'CmtjNjFlNDc0MDk3NTc1OGVhNGNjZDI4YWU2MTA1ZmY3MlBTcEpvYl9Nek8tYmowV0wyUUZEbklOX2tGY2gwaDdQbTVlSE5JUTMwQ1FjNmVBVzhNN0NmSXg1WjBWQ3BHS25nOHFIZ2dBQUZBQRIGaXBob25lGgVwaG9uZSDImYwjKgVhcHBsZTIkWUM0MDRBQ0M4OUYzQTc0NzREOUJBNjI0QTQwQzk2QjFEM0M2OgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCGIxNDlhNmMx';
modifiedHeaders['x-bili-trace-id'] = '31110f6a4b05cceb1b0d2d153c64a231:1b0d2d153c64a231:0:0';
// modifiedHeaders['x-bili-exps-bin'] = '';
$done({'headers': modifiedHeaders});
