const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  COOKIE: ttcid=abd765d4fbd745409592ca3ced20f6f410; _ga=GA1.2.1901550783.1660282210; _gid=GA1.2.593503442.1660282210; MONITOR_WEB_ID=9fc1be2d-81c0-41bc-a7b3-53381e5d8b0a; __tea_cookie_tokens_2608=%7B%22web_id%22%3A%227130857767414154756%22%2C%22user_unique_id%22%3A%227130857767414154756%22%2C%22timestamp%22%3A1660282211093%7D; s_v_web_id=verify_l6q16uah_KxA4jZWI_sQFs_4v48_83ID_yCpgvvbFmUTx; passport_csrf_token=16153aa02e10acbdc14439fadc95bfdf; passport_csrf_token_default=16153aa02e10acbdc14439fadc95bfdf; _tea_utm_cache_2018=undefined; MONITOR_DEVICE_ID=04460e8d-1d0a-454f-995a-a6aee0daff91; n_mh=3KhW9EaK0uD4c9FrD5FdzZcy9Ii88QbiNhZs5Ma1i6A; passport_auth_status=f3b0cac2b3aa280c64c65548459e1d6b,; passport_auth_status_ss=f3b0cac2b3aa280c64c65548459e1d6b,; sid_guard=d08b1291b973115c8b94eaeaaf652b41|1660282282|31536000|Sat,+12-Aug-2023+05:31:22+GMT; uid_tt=2aa5c62c59762fe950f63028ad982719; uid_tt_ss=2aa5c62c59762fe950f63028ad982719; sid_tt=d08b1291b973115c8b94eaeaaf652b41; sessionid=d08b1291b973115c8b94eaeaaf652b41; sessionid_ss=d08b1291b973115c8b94eaeaaf652b41; sid_ucp_v1=1.0.0-KDJkNTZjNTIwOTg4YzI4MjllOWQyNTE1YWE4NzZlNTQwNzk5MTk3NGQKFgjXquDjtoxKEKrL15cGGLAUOAJA8QcaAmxmIiBkMDhiMTI5MWI5NzMxMTVjOGI5NGVhZWFhZjY1MmI0MQ; ssid_ucp_v1=1.0.0-KDJkNTZjNTIwOTg4YzI4MjllOWQyNTE1YWE4NzZlNTQwNzk5MTk3NGQKFgjXquDjtoxKEKrL15cGGLAUOAJA8QcaAmxmIiBkMDhiMTI5MWI5NzMxMTVjOGI5NGVhZWFhZjY1MmI0MQ; _tea_utm_cache_6587={"utm_source":"jj_nav"}; _tea_utm_cache_2608={"utm_medium":"user_center","utm_campaign":"hdjjgame"}; tt_scid=.IZ.KzrMJnYEBm.YMXKawWqd0FASnF2JtfkR9um-89u6zlQ5dkHocbjbk38St99g5985,
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  COOKIE_2: env.COOKIE_2,
  COOKIE_3: env.COOKIE_3,
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  /**
   * 邮箱配置
   * user 发件人邮箱, pass, 发件人密码, to收件人
   */
  EMAIL_USER: env.EMAIL_USER,
  EMAIL_PASS: env.EMAIL_PASS,
  EMAIL_TO: env.EMAIL_TO,
  /**
   * 钉钉配置
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
  /**
   * PushPlus配置
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
  PUSHPLUS_TOKEN: 46e72583bb674ece86811481e36b262f
};
