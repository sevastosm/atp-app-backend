import { createTransport } from "nodemailer";
const template = `<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#161616;width:100%;background-color:#161616" width="100%" bgcolor="#161616">
    <tbody>
        <tr>
            <td>
                <div style="margin:0px auto;max-width:732px">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
                        <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:16px;text-align:center">
                                    <div style="margin:0px auto;max-width:700px">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
                                            <tbody>
                                                <tr>
                                                    <td style="border-left:solid 4px #ffffff;border-right:solid 4px #ffffff;border-top:solid 4px #ffffff;direction:ltr;font-size:0px;padding:0;text-align:center">
                                                        <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="background:#161616;font-size:0px;word-break:break-word">
                                                                            <div style="height:15px;line-height:15px">
                                                                                &hairsp;</div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style="background:#161616;background-color:#161616;margin:0px auto;max-width:700px">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#161616;background-color:#161616;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td style="border-left:solid 4px #ffffff;border-right:solid 4px #ffffff;direction:ltr;font-size:0px;padding:18px 0px 0px 0px;text-align:center">
                                                        <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="background-color:transparent;vertical-align:top;padding:10px 0px 28px 0px">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div style="text-align:center">
                                                                                                <a style="display:inline-block;max-width:100%;max-height:90px"><img src="https://ci3.googleusercontent.com/proxy/S2RhmYL6ork7x-IOQxr1sOuDkHhCxt3aHgTNdpip_8dMXRtQGnMDnVu3NznJKfql-RmbDfVGcSFj9_NRb1OV95J55jztTmOgRx239OPibUbp6T_hRYFMzMAMukyh_BqaLexVrLjujFc6x_Z_fVk1RJNOOD7c0IiqBTwMJ3DwNMHvX0U-Co2RJ5zQdRtH4mXUs9hatHkeEVit4ioYtK9mrDTkySFojt0gloQdaEwBAJNZNU8q7FCRaz8=s0-d-e1-ft#https://images.wixstatic.com/media/6569c6_a000a731e7504f7cb9646e628d24e488~mv2.png/v1/fit/h_180,q_100,w_692,al_c,lg_0/6569c6_a000a731e7504f7cb9646e628d24e488~mv2.png" width="auto" style="display:inline-block;max-width:100%;width:auto;vertical-align:middle;max-height:90px" alt="" data-bit="iit"></a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style="text-transform:uppercase;color:#ffffff;text-align:center;font-family:montserrat,Helvetica,sans-serif;letter-spacing:2px;line-height:1.3;font-size:44px;background:#161616;background-color:#161616;margin:0px auto;max-width:700px">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#161616;background-color:#161616;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td style="border-left:solid 4px #ffffff;border-right:solid 4px #ffffff;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center">
                                                        <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="background-color:transparent;border:0px none transparent;border-radius:0px;vertical-align:top;padding:18px 30px 10px 30px">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                                                                            <div style="font-family:montserrat,Helvetica,sans-serif;font-style:normal;line-height:1;text-align:left;text-transform:uppercase;color:#ffffff;white-space:pre-wrap">
                                                                                                <div style="text-align:center">
                                                                                                    <p style="margin:0;line-height:57px;font-size:44px">
                                                                                                        Καλως ηρθες!
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word;color: #fff;text-transform: none;">
                                                                                            
                                                                                        <div style="text-align:center">
                                                                                                    <p style="margin:0;;font-size:15px">Για την είσοδο στο λογαριασμό σου χρησιμοποίησε τα παρακάτω:</p>
                                                                                                </div><div style="text-align:center;padding: 14px;">
                                                                                                    <p style="margin:0;;font-size:15px">User name: -test-</p>
                                                                                                </div><div style="text-align:center;padding: 14px;">
                                                                                                    <p style="margin:0;;font-size:15px">password: 678234424324</p>
                                                                                                </div></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div style="background:#161616;background-color:#161616;margin:0px auto;max-width:700px">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#161616;background-color:#161616;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td style="border-left:solid 4px #ffffff;border-right:solid 4px #ffffff;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center">
                                                        <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="vertical-align:top;padding:18px 30px 18px 30px">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" valign="middle" style="font-size:0px;padding:0;word-break:break-word">
                                                                                            <div style="max-width:300px">
                                                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td align="center" bgcolor="#5BABEB" role="presentation" style="border:solid 2px #030303;border-radius:2px;background:#5babeb" valign="middle">
                                                                                                                <a href="https://shoutout.wix.com/so/tr/85154ad0-a526-4232-a8f4-ab3b8dce29e2/c?w=ayFwtlehZMLDL4Nw3sD5mGITyGx3GRc1BGPanzWNV6o.eyJ1IjoiaHR0cHM6Ly93d3cuYXRwc3RvcmUuZ3IvIiwiciI6ImRlM2U0ZGVlLWNmZWMtNGY4ZC1hNTg3LTljODU5NDk1ZTMwNiIsImMiOiIwOWUxN2FiMy1kZDZkLTQ5ZGYtOGJmYy00ZWEyZWZhMDkyYmEiLCJtIjoibWFpbCJ9" rel="noopener" style="display:inline-block;background:#5babeb;color:#030303;font-family:helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:12px 30px 12px 30px;border-radius:2px" target="_blank"><strong style="font-weight:inherit">ΕΙΣΟΔΟΣ</strong></a><img height="1" style="display:block;width:140px!important;height:1px;max-width:100%!important;max-height:1px" src="https://ci6.googleusercontent.com/proxy/cbvZ__IErtRy04gE1wGQOZS1hL2oLOKTt7CpP9ZNGjk2z4EKtPle6UHgUWuFbf7yocTdJRjHUAxM3q8vY8oQWxBtmekQjnSP9HRh2Kn0a3O1999C3JsgYFjfKZ58dsbE4xA0xhk=s0-d-e1-ft#https://static.wixstatic.com/media/5e9922_0a9111966d7648649336e1f1546c5ec9~mv2.gif" alt="" data-bit="iit">
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style="background:#161616;background-color:#161616;margin:0px auto;max-width:700px">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#161616;background-color:#161616;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td style="border-left:solid 4px #ffffff;border-right:solid 4px #ffffff;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center">
                                                        <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="vertical-align:top;padding:18px 30px 18px 30px">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" style="font-size:0px;padding:0 0 30px;word-break:break-word">
                                                                                            <div style="font-family:helvetica,sans-serif;font-size:20px;font-style:normal;font-weight:normal;line-height:1;text-align:center;text-decoration:none;color:#ffffff;white-space:pre-wrap">
                                                                                                Ακολουθήστε μας!</div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="padding:0 13px;vertical-align:middle">
                                                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:28px">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td style="font-size:0;height:28px;vertical-align:middle;width:28px">
                                                                                                                            <a href="https://shoutout.wix.com/so/tr/85154ad0-a526-4232-a8f4-ab3b8dce29e2/c?w=fTA7ah-zVlkBrxTG9prByKUndVZj941Ou5MGiXRQNZU.eyJ1IjoiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0FUUFRlYW1HcmVlY2UiLCJyIjoiZjE4NDA1YzktYTk5OC00MjY0LTJjZGEtN2Q4OTM1NzMzZGViIiwiYyI6IjA5ZTE3YWIzLWRkNmQtNDlkZi04YmZjLTRlYTJlZmEwOTJiYSIsIm0iOiJtYWlsIn0" target="_blank"><img alt="Follow on Facebook" height="28" src="https://ci6.googleusercontent.com/proxy/fX3Tt_-XYzl6tsd2RzwdYKqpMAn-DVLthHL420csARMVuzYhn4E7ZGPeiUY4wF_584nCjCTVlCZasFRsUUrS-7Q0W252EgZiYFBshkun3niF7KyIkfaaOPZKDQzA0sQPwDDoaHBBboN8BTLn808-cmIA0o1I3HdXgeUPdSN9Yljkwt_BKxU8ux45KKRniEqQ2pa0N7Otw_Q01kboJivj7Rdcp3xK654E3XbqOPFy_gFWPve9IrwYNQiDS58E72TirIr8rQ=s0-d-e1-ft#https://images.wixstatic.com/media/a306cb_6f69311272764c9094f1795b992fa3c1~mv2.png/v1/fit/w_750,h_750,br_0,sat_-100,hue_180,lg_0/a306cb_6f69311272764c9094f1795b992fa3c1~mv2.png" style="border-radius:3px;display:block" width="28" data-bit="iit"></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="padding:0 13px;vertical-align:middle">
                                                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:28px">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td style="font-size:0;height:28px;vertical-align:middle;width:28px">
                                                                                                                            <a href="https://shoutout.wix.com/so/tr/85154ad0-a526-4232-a8f4-ab3b8dce29e2/c?w=09vf8Quwe45aO9fpMFvOaph94mlV-ubxWDf6Ckyoak8.eyJ1IjoiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hdHBzdG9yZS5nciIsInIiOiJmMTg0MDVjOS1hOTk4LTQyNjQtMmNkYS03ZDg5MzU3MzNkZWIiLCJjIjoiMDllMTdhYjMtZGQ2ZC00OWRmLThiZmMtNGVhMmVmYTA5MmJhIiwibSI6Im1haWwifQ" target="_blank"><img alt="Follow on Instagram" height="28" src="https://ci3.googleusercontent.com/proxy/mumKmM7ylnsKDQl2fqrKjR0cDnHV17a2GW2V1B93w3IDguPGLdgoJzOv5pDDBVIQmIWrMPev6A6F9nStIIjFH8rTRTJi5mlK8d5xzDtOavg5m0mYsJ89Tfotd4eminqlVt5RcMznE-_xXI7HyrPQQlpPkaOsIncpslzrMNCuUOZym3vwmQ1uDc4GmS6W3mCqvmQOOTd2X-Bt6mypPsb1PbYSigs_yE09GidhiD8hEOQ6BmFc-xuxxnC3QsRrFWBkD2YONA=s0-d-e1-ft#https://images.wixstatic.com/media/a306cb_a46fa514003c41ab906638635f992277~mv2.png/v1/fit/w_750,h_750,br_0,sat_-100,hue_180,lg_0/a306cb_a46fa514003c41ab906638635f992277~mv2.png" style="border-radius:3px;display:block" width="28" data-bit="iit"></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="padding:0 13px;vertical-align:middle">
                                                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:28px">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td style="font-size:0;height:28px;vertical-align:middle;width:28px">
                                                                                                                            <a href="https://shoutout.wix.com/so/tr/85154ad0-a526-4232-a8f4-ab3b8dce29e2/c?w=aNzhX%2Fk3hnr6hxpxEZjqLSF03eLELQ-cUsJIgoHctHM.eyJ1IjoiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ3YzVGJDYTh2TUFGWGJiWFV6ZXhBN1EiLCJyIjoiZjE4NDA1YzktYTk5OC00MjY0LTJjZGEtN2Q4OTM1NzMzZGViIiwiYyI6IjA5ZTE3YWIzLWRkNmQtNDlkZi04YmZjLTRlYTJlZmEwOTJiYSIsIm0iOiJtYWlsIn0" target="_blank"><img alt="Follow on YouTube" height="28" src="https://ci5.googleusercontent.com/proxy/KtmGHnjxUcj1oi_lV1xcYtgcwaIa03CtDeIKBKpdrNAdW0gNR_Bwq0m27cXPzkH-3pvAGJ58NgxxAzflaLtu2zRIivfz-LTvIlfOCvs6rNcHOUFKoXuMe54B-RbkGdcUzH0li2J3RMkiC7MvY7aiNTFRpVb6heqDKFP9YpqAwqM9nbdljbQe33V0VTWCqy3iKY5gLuQNVWgvCiTBrti4rPmOtNzc-y_fnTAadXjEENFfnfzUXb1LG-X_VZWHMvzYKdCN_Q=s0-d-e1-ft#https://images.wixstatic.com/media/a306cb_415ce174e5ca4c9181eb4a1133533636~mv2.png/v1/fit/w_750,h_750,br_0,sat_-100,hue_180,lg_0/a306cb_415ce174e5ca4c9181eb4a1133533636~mv2.png" style="border-radius:3px;display:block" width="28" data-bit="iit"></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style="background:#161616;background-color:#161616;margin:0px auto;max-width:700px">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#161616;background-color:#161616;width:100%;text-align: center;">
                                            <tbody>
                                                <tr style="
    text-align: center;
">
                                                    <td style="border-left:solid 4px #ffffff;border-right:solid 4px #ffffff;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;">

                                                        <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;max-width:100%;text-align: center;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                <tbody>
                                                                    <tr style="
    text-align: center;
">
                                                                        <td style="vertical-align:middle;padding-right:30px;padding-left:30px;text-align: center;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" style="font-size:0px;padding:0px 10px 0px 10px;">
                                                                                            <div style="font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:17px;text-align:center;color:#000000;">
                                                                                                <div style="/* margin-right:1.5px; */display:block;overflow:hidden;vertical-align:middle;/* max-height:100px; */width: 100%;text-align: center;/* max-width: 500; */">
                                                                                                    <a style="text-decoration:none;font-family:helvetica,sans-serif;line-height:1.5;font-size:12px;color:#ffffff;/* width: 100%; */text-align: center;display: block;width: 100%;" href="https://shoutout.wix.com/so/tr/85154ad0-a526-4232-a8f4-ab3b8dce29e2/c?w=f078DGi9qMf056tcPKJhB4DY7H0IejEtzGkjSpO-zUw.eyJ1IjoiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9JUNFJTkxJUNGJTgzJUNFJUJBJUNFJUJCJUNFJUI3JUNGJTgwJUNFJUI5JUNFJUJGJUNGJThEKzE0JTJDKyVDRSU5QSVDRSVCMSVDRSVCQyVDRSVCMSVDRiU4NCVDRSVCNSVDRiU4MSVDRiU4QysxMzQ1MSIsInIiOiJjMWVmMzU0Mi04YjgyLTQxMjgtOGZlYS0xOTU5Y2IzOTJjMTEiLCJjIjoiMDllMTdhYjMtZGQ2ZC00OWRmLThiZmMtNGVhMmVmYTA5MmJhIiwibSI6Im1haWwifQ" target="_blank">
                                                                                                        <strong style="text-align: center;display: block;padding: 0;margin: auto;">
                                                                                                            Ασκληπιού
                                                                                                            14, Καματερό
                                                                                                            13451
                                                                                                        </strong></a>
                                                                                                </div>
                                                                                                <div style="margin-right:1.5px;display:block;overflow:hidden;vertical-align:middle;max-height:100px">
                                                                                                    <a style="text-decoration:none;font-family:helvetica,sans-serif;line-height:1.5;font-size:12px;color:#ffffff" href="https://shoutout.wix.com/so/tr/85154ad0-a526-4232-a8f4-ab3b8dce29e2/c?w=HIkTLhzSk2TegcBhE-mfnB7DyVArYd77f79DUsmIsJY.eyJ1IjoidGVsOjIxMCAyMzEgMTMwMyIsInIiOiJjMWVmMzU0Mi04YjgyLTQxMjgtOGZlYS0xOTU5Y2IzOTJjMTEiLCJjIjoiMDllMTdhYjMtZGQ2ZC00OWRmLThiZmMtNGVhMmVmYTA5MmJhIiwibSI6Im1haWwifQ" target="_blank"><strong style="font-weight:inherit;display: block;text-align: center;">210-2311303</strong></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div style="height:10px;padding:0px 30px 0px 30px"></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div style="margin:0px auto;max-width:700px">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
                                            <tbody>
                                                <tr>
                                                    <td style="border-bottom:solid 4px #ffffff;border-left:solid 4px #ffffff;border-right:solid 4px #ffffff;direction:ltr;font-size:0px;padding:0;text-align:center">
                                                        <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="background:#161616;font-size:0px;word-break:break-word">
                                                                            <div style="height:20px;line-height:20px">
                                                                                &hairsp;</div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>`;
export default function send(name) {
  let transporter = createTransport({
    service: "gmail",
    auth: {
      user: "sevastosmatzouranis@gmail.com",
      pass: "qcocerpmmlwpktbp",
    },
  });

  let mailOptions = {
    from: "atpapp@gmail.com",
    to: "matthewlazos@gmail.com",
    subject: "Atp-store νέα εγγραφη",
    text: "This is a test email sent from Node.js" + name,
    html: template,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
