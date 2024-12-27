package cn.rollin.passwordassistant.service.impl;

import cn.rollin.passwordassistant.entity.User;
import cn.rollin.passwordassistant.mapper.UserMapper;
import cn.rollin.passwordassistant.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author rollin
 * @since 2024-12-27 23:53:06
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
